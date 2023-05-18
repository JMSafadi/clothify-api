const validatorHandler = (schema, property) => {
  return (req, res, next) => {
    const data = req[property]
    const { error } = schema.validate(data)
    if (error) {
      next(error)
      throw Error(`Bad Request: ${error}`)
    }
    next()
  }
}

module.exports = validatorHandler
