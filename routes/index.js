const productsRouter = require('./product.router')

const routerApi = (app) => {
  app.use('/products', productsRouter)
}

module.exports = routerApi