import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import { Database, Resource } from "@adminjs/mongoose";

import Product from "./models/Product.js";

/* ---------------- REGISTER ADAPTER ---------------- */
AdminJS.registerAdapter({ Database, Resource });

const app = express();

/* ---------------- DATABASE ---------------- */
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");

/* ---------------- ADMINJS CONFIG ---------------- */
const adminJs = new AdminJS({
  rootPath: "/admin",
  resources: [
    {
      resource: Product,
      options: {
        navigation: "My Store",
        properties: {
          slug: { isVisible: false },
          images: { isArray: true },
        },
        actions: {
          new: {
            before: async (request) => {
              if (request.payload?.title) {
                request.payload.slug = request.payload.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");
              }
              return request;
            },
          },
          edit: {
            before: async (request) => {
              if (request.payload?.title) {
                request.payload.slug = request.payload.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "");
              }
              return request;
            },
          },
        },
      },
    },
  ],
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

/* ---------------- PUBLIC API ---------------- */
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({ active: true }).lean();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`AdminJS running at /admin`);
});
