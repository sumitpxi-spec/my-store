import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

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

/* ---------------- ADMIN ---------------- */
const adminJs = new AdminJS({
  resources: [Product],
  rootPath: "/admin",
});

/* ---------------- SESSION ---------------- */
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: "sessions",
});

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
  console.log(`AdminJS running at /admin`);
});
