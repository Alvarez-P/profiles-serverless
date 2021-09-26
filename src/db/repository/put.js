const { docClient } = require('../config')
const { TABLE_NAME } = require('../constants')

const put = (item) =>
  docClient
    .put({
      TableName: TABLE_NAME,
      Item: item,
    })
    .promise()

module.exports = put
