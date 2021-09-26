const { INDICES_NAMES_MATCHER } = require("../constants")

const buildExpressions = (filter) => {
  let KeyConditionExpression = '',
    UpdateExpression = 'set ',
    IndexName
  const ExpressionAttributeNames = {},
    ExpressionAttributeValues = {}

  Object.entries(filter).forEach(([key, value]) => {
    const attrName = `#${key}`,
      attrValue = `:${key}`
    ExpressionAttributeNames[attrName] = key
    ExpressionAttributeValues[attrValue] = value
    UpdateExpression += `${attrName} = ${attrValue}, `
    if (
      typeof value === 'boolean' ||
      typeof value === 'number' ||
      ['pk', 'gsi1_pk', 'gsi2_pk', 'gsi3_pk'].includes(key)
    )
      KeyConditionExpression += `${attrName} = ${attrValue} AND `
    else KeyConditionExpression += `begins_with(${attrName}, ${attrValue}) AND `

    IndexName = INDICES_NAMES_MATCHER[key]
  })
  return {
    ExpressionAttributeNames,
    ExpressionAttributeValues,
    KeyConditionExpression: KeyConditionExpression.slice(0, -5),
    UpdateExpression: UpdateExpression.slice(0, -2),
    IndexName: IndexName || null
  }
}

module.exports = buildExpressions
