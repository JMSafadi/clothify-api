const joi = require('joi')

const id = joi.number().integer()
const title = joi.string()
const price = joi.number().integer()
const description = joi.string()
const image = joi.string().uri()
const category = joi.string()

const createProductSchema = joi.object({
  title: title.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  category: category.required()
})

const updateProductSchema = joi.object({
  title: title,
  price: price,
  description: description,
  image: image,
  category: category
})

const getProductSchema = joi.object({
  id: id.required(),
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
