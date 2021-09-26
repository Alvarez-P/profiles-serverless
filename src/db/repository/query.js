const { docClient } = require('../config')
const { TABLE_NAME } = require('../constants')
const buildExpressionAttrs = require('./buildExpressionAttrs')

const query = (filters) => {
  const {
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    IndexName
  } = buildExpressionAttrs(filters)
  const params = {
    TableName: TABLE_NAME,
    IndexName,
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues
  }
  return docClient.query(params).promise()
}

module.exports = query
