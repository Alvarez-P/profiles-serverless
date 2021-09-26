const { dynamoDB } = require('../config')
const { TABLE_NAME } = require('../constants')

const deleteTable = async () => {
  await dynamoDB.deleteTable({
    TableName: TABLE_NAME,
  })
}

deleteTable()
