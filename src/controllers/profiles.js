const ProfileDocument = require('../db/documents/profiles')
const Repository = require('../db/repository')

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

module.exports = {
  create,
}
