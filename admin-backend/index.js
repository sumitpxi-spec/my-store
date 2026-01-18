import express from "express";
import mongoose from "mongoose";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSMongoose from "@adminjs/mongoose";

AdminJS.registerAdapter(AdminJSMongoose);

const app = express();

/* MongoDB */
await mongoose.connect(process.env.MONGO_URI);

/* Admin */
const admin = new AdminJS({
  rootPath: "/admin",
  resources: [],
});

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
    cookieName: "adminjs",
    cookiePassword: process.env.ADMIN_SECRET,
  }
);

app.use(admin.options.rootPath, adminRouter);

app.get("/", (req, res) => {
  res.send("AdminJS running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`AdminJS running on port ${PORT}`)
);
