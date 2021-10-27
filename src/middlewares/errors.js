const HttpError = require('../utils/httpError')

const handleErrors = (err, req, res, next) => {
  const { code, name = 'Error', ...body } = err instanceof HttpError
    ? err
    : { code: 500, message: 'Internal server error' }

  console.log(err)
  res.status(code).json(body)
}

const notFound = (req, res, next) => {
  res.status(404).json({ error: 'Not found' })
}

module.exports = { handleErrors, notFound }
