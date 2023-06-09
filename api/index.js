const express = require('express')
const routerApi = require('./routes/')
const cors = require('cors')
const { errorHandler, logErrors, ormErrorHandler } = require('../middlewares/error.handler')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whiteList = ['http://127.0.0.1:5173', 'https://shop-clothify.web.app']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Error'))
    }
  }
}

app.use(cors(options))
app.use(cors())

app.get('/api', (req, res) => {
  res.send('<h1>Welcome to Clothify API. Go to /products</h1>')
})

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('My port:', port)
})
