const express = require('express')
const productsRouter = require('./product.router')
const usersRouter = require('./users.router')

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api', router)
  app.use('/api/products', productsRouter)
  app.use('/api/users', usersRouter)
}

module.exports = routerApi
