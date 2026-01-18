import express from 'express'
import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import Product from './models/Product.js'

const app = express()

/* ============================
   DATABASE
============================ */
await mongoose.connect(process.env.MONGO_URI)
console.log('MongoDB connected')

/* ============================
   ADMINJS
============================ */
const admin = new AdminJS({
  resources: [
    {
      resource: Product,
      options: {
        navigation: 'Catalog',
      },
    },
  ],
  rootPath: '/admin',
})

/* ============================
   SESSION (REQUIRED FIX)
============================ */
const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGO_URI,
  collectionName: 'sessions',
})

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate: async (email, password) => {
      if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        return { email }
      }
      return null
    },
    cookieName: 'adminjs',
    cookiePassword: process.env.ADMIN_COOKIE_SECRET,
  },
  null,
  {
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    secret: process.env.ADMIN_COOKIE_SECRET,
  }
)

app.use(admin.options.rootPath, adminRouter)

/* ============================
   ROOT CHECK
============================ */
app.get('/', (req, res) => {
  res.send('AdminJS running')
})

/* ============================
   START SERVER
============================ */
const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
  console.log(`AdminJS running on port ${PORT}`)
})
