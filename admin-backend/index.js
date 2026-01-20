import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/mongoose";

import Product from "./models/Product.js";

AdminJS.registerAdapter({ Database, Resource });

const app = express();

/* ============================
   ✅ HARD CORS FIX (NO GUESSING)
============================= */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

/* ---------------- DATABASE ---------------- */
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");

/* ---------------- PUBLIC API (MUST BE BEFORE ADMINJS) ---------------- */
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({ active: true }).lean();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/* ---------------- ADMINJS CONFIG ---------------- */
const adminJs = new AdminJS({
  rootPath: "/admin",
  resources: [{ resource: Product }],
});

/* ---------------- SESSION ---------------- */
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: "sessions",
});

/* ---------------- ADMIN ROUTER ---------------- */
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    authenticate: async (email, password) => {
      if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        return { email };
      }
      return null;
    },
    cookieName: "adminjs",
    cookiePassword: process.env.SESSION_SECRET,
  },
  null,
  {
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
  }
);

app.use(adminJs.options.rootPath, adminRouter);

/* ---------------- START ---------------- */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
