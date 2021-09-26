const HttpError = require('../utils/httpError')

const validate = (scheme, reqProperty) => (req, res, next) => {
  try {
    const validation = scheme.validate(req[reqProperty])
    if (validation.error) {
      const errorDetails = validation.error.details[0]
      throw new HttpError(400, errorDetails.message, {
        field: [reqProperty, ...errorDetails.path],
        value: errorDetails.context.value
      })
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = validate
