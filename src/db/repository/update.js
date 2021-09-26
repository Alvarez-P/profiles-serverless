const { docClient } = require('../config')
const { TABLE_NAME } = require('../constants')
const buildExpressions = require('./buildExpressions')

const update = (pk, sk, data) => {
  const {
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  } = buildExpressions(data)
  const params = {
    TableName: TABLE_NAME,
    Key: { pk, sk },
    UpdateExpression,
    ExpressionAttributeNames,
    ExpressionAttributeValues,
  }
  return docClient.update(params).promise()
}

module.exports = update
