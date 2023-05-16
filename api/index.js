const express = require('express')
const routerApi = require('./routes/')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const whiteList = ['http://127.0.0.1:5173', 'https://shop-clothify.web.app']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) !== 1) {
      callback(null, true)
    } else {
      callback(new Error('Error'))
    }
  }
}

app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('<h1>Welcome to Clothify API. Go to /products</h1>')
})

routerApi(app)

app.listen(port, () => {
  console.log('My port:', port)
})
