const { ValidationError } = require('sequelize')

const logErrors = (error, req, res, next) => {
  console.error(error)
  next(error)
}

const errorHandler = (error, req, res, next) => {
  console.error(error)
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

const ormErrorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    })
  }
  next(error)
}

module.exports = { logErrors, errorHandler, ormErrorHandler }
