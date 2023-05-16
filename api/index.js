const express = require('express')
const routerApi = require('./routes/')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('My port:', port)
})

app.use(express.json())

const whiteList = ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://shop-clothify.web.app/']
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Error'))
    }
  }
}

app.get('/api', (req, res) => {
  res.send('Welcome to Clothify API. Go to /products')
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
})

app.use(cors(options))
routerApi(app)
