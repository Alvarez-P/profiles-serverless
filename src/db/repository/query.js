const { docClient } = require('../config')
const { TABLE_NAME } = require('../constants')
const buildExpressions = require('./buildExpressions')

const query = (filters) => {
  const {
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    IndexName
  } = buildExpressions(filters)
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
