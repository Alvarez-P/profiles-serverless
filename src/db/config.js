const AWS = require('aws-sdk')
const { Configuration, Constants } = require('../config')

AWS.config.update({
  convertEmptyValues: true,
  region: Configuration.get(Constants.DB_REGION),
  endpoint: Configuration.get(Constants.DB_ENDPOINT),
})

const docClient = new AWS.DynamoDB.DocumentClient()
const dynamoDB = new AWS.DynamoDB()

module.exports = { docClient, dynamoDB }
