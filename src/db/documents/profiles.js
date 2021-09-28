const { v4: uuidv4 } = require('uuid')
const { HASH_KEYS } = require('../constants')
const BaseDocument = require('./base')

class ProfileDocument extends BaseDocument {
  constructor(
    userId,
    email,
    curp,
    lastname,
    firstname,
    rfc,
    age,
    phone_number,
    birthday
  ) {
    super(
      `${HASH_KEYS.PROFILES}-${uuidv4()}`,
      HASH_KEYS.PROFILES,
      userId,
      email,
      curp
    )
    this.lastname = lastname
    this.firstname = firstname
    this.rfc = rfc
    this.age = age
    this.phone_number = phone_number
    this.birthday = birthday
  }
}

module.exports = ProfileDocument
