const express = require('express')
const routerApi = require('./routes/')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('My port:', port)
})

app.use(express.json())

const whitelist = ['http://localhost:8080/']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Error'))
    }
  }
}
// app.use(cors(options))

app.get('/api', (req, res) => {
  res.send('Welcome to Clothify API. Go to /products')
})

routerApi(app)
