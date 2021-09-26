require('dotenv').config({ path: '../../.env' })
const constants = require('./constants')

class Configuration {
  constructor () {
    if (Configuration.instance) return Configuration.instance
    this.envConfig = {}
    Object.values(constants).forEach((value) => {
      this.envConfig[value] = process.env[value]
    })
    Configuration.instance = this
  }

  get (key) {
    return this.envConfig[key]
  }
}

const instance = new Configuration()
Object.freeze(instance)

module.exports = instance
