const EmployeeDocument = require('../db/documents/employees')
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
    const employee = new EmployeeDocument(body.pk, body.sk)
    await Repository.put(employee)
    res.status(201).json({ id: employee.sk, message: 'Created' })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
}
