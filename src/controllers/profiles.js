const ProfileDocument = require('../db/documents/profiles')
const { ProfileMapper } = require('../db/mappers')
const { HASH_KEYS } = require('../db/constants')
const Repository = require('../db/repository')
const parser = require('../utils/parser')

/**
 * @function add
 * @description Controller for POST /api/profiles
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const create = async ({ body }, res, next) => {
  try {
    const profile = new ProfileDocument(
      body.gsi1_pk,
      body.gsi2_pk,
      body.gsi3_pk || null,
      body.lastname,
      body.firstname,
      body.rfc || null,
      body.age || null,
      body.phone_number || null,
      body.birthday || null
    )
    await Repository.put(profile)
    res.status(201).json({ id: profile.pk, message: 'Created' })
  } catch (error) {
    next(error)
  }
}

/**
 * @function get
 * @description Controller for GET /api/profiles
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const get = async ({ params }, res, next) => {
  try {
    const filters = {
      pk: params.pk,
      sk: HASH_KEYS.PROFILES
    }
    const response = await Repository.query({ filters, strict: ['sk'] })
    response.Items = parser({
      mapperObject: ProfileMapper,
      sourceData: response.Items,
      exclude: ['sk'],
    })
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  get
}
