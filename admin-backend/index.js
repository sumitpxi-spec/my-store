import express from "express";
import mongoose from "mongoose";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js";
import Category from "./models/Category.js";
import Order from "./models/Order.js";

dotenv.config();

AdminJS.registerAdapter(AdminJSMongoose);

const app = express();

/* MongoDB */
await mongoose.connect(process.env.MONGODB_URI);

/* AdminJS */
const admin = new AdminJS({
  resources: [
    { resource: Product },
    { resource: Category },
    { resource: Order }
  ],
  rootPath: "/admin",
  branding: {
    companyName: "My Store Admin"
  }
});

/* Auth */
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
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
    cookiePassword: "sessionsecret"
  }
);

app.use(admin.options.rootPath, adminRouter);

app.get("/", (_, res) => {
  res.send("Admin backend running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("AdminJS running on port", PORT);
});
