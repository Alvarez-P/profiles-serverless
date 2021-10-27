const { docClient } = require('../config')
const { TABLE_NAME } = require('../constants')
const buildExpressions = require('./buildExpressions')

const query = ({ filters, strict = [] }) => {
  const {
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    IndexName,
  } = buildExpressions(filters, strict)
  const params = {
    TableName: TABLE_NAME,
    IndexName,
    KeyConditionExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  }
  return docClient.query(params).promise()
}

module.exports = query
