const { dynamoDB } = require('../config')
const { TABLE_NAME } = require('../constants')

const getItem = (filters) => {
  const params = {
    TableName: TABLE_NAME,
    Key: filters
  }
  return dynamoDB.getItem(params).promise()
}

module.exports = getItem
