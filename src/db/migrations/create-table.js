const { dynamoDB } = require('../config')
const { TABLE_NAME, INDICES_NAMES } = require('../constants')

const createTable = async () => {
  const params = {
    TableName: TABLE_NAME,
    KeySchema: [
      { AttributeName: 'pk', KeyType: 'HASH' },
      { AttributeName: 'sk', KeyType: 'RANGE' },
    ],
    AttributeDefinitions: [
      { AttributeName: 'pk', AttributeType: 'S' },
      { AttributeName: 'sk', AttributeType: 'S' },
      { AttributeName: 'gsi1_pk', AttributeType: 'S' },
      { AttributeName: 'gsi2_pk', AttributeType: 'S' },
      { AttributeName: 'gsi3_pk', AttributeType: 'S' }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
    GlobalSecondaryIndexes: [
      {
        IndexName: INDICES_NAMES[0],
        KeySchema: [
          {
            AttributeName: 'gsi1_pk',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
      {
        IndexName: INDICES_NAMES[1],
        KeySchema: [
          {
            AttributeName: 'gsi2_pk',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
      {
        IndexName: INDICES_NAMES[2],
        KeySchema: [
          {
            AttributeName: 'gsi3_pk',
            KeyType: 'HASH',
          }
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      },
    ],
  }

  await dynamoDB.createTable(params).promise()
}

createTable()
