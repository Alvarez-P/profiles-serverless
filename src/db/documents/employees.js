const BaseDocument = require('./base')
const { v4: uuidv4 } = require('uuid')
const { HASH_KEYS } = require('../constants')

class EmployeeDocument extends BaseDocument {
  constructor(companyId, profileId) {
    super(companyId, profileId, `${HASH_KEYS.EMPLOYEES}-${uuidv4()}`, '_', '_')
  }
}

module.exports = EmployeeDocument
