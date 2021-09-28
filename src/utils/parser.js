const parser = ({ mapperObject = {}, sourceData = [], exclude = [] }) => {
  for (const item of sourceData) {
    Object.entries(mapperObject).forEach(([originalKey, finalKey]) => {
      if (item[originalKey]) {
        if (exclude.includes(originalKey))
          delete item[originalKey]
        else {
          const temp = item[originalKey]
          delete item[originalKey]
          item[finalKey] = temp
        }
      }
    })
  }
  return sourceData
}

module.exports = parser
