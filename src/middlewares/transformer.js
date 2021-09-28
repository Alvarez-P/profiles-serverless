const transformer = (mapperObject, reqProperty) => (req, res, next) => {
  Object.entries(mapperObject).forEach(([finalKey, originalKey]) => {
    if (req[reqProperty][originalKey]) {
      const temp = req[reqProperty][originalKey]
      delete req[reqProperty][originalKey]
      req[reqProperty][finalKey] = temp
    }
  })
  next()
}

module.exports = transformer
