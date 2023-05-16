const express = require('express')
const productsRouter = require('./product.router')

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api', router)
  app.use('/api/products', productsRouter)
}

module.exports = routerApi
