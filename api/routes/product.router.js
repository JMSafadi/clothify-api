const express = require('express')

const router = express.Router()
const ProductServices = require('./../services/product.service')
const service = new ProductServices()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.status(200).json(products)
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
  
    if (product) { 
      res.status(200).json(product)
    } else {
      res.status(404).json({
        error: 'Product not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: `Internal Server Error: ${error}`
    })
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = await service.update(id, body)
  res.json(product)
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const rta = await service.delete(id)
  res.json(rta)
})

module.exports = router
