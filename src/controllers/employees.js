const { HASH_KEYS } = require('../db/constants')
const EmployeeDocument = require('../db/documents/employees')
const Repository = require('../db/repository')

/**
 * @function create
 * @description Controller for POST /api/employees
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

/**
 * @function getByCompany
 * @description Controller for GET /api/employees
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express middleware function
 */
const getByCompany = async ({ params }, res, next) => {
  try {
    const response = await Repository.query({ ...params, sk: HASH_KEYS.PROFILES })
    res.status(200).json(response)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  create,
  getByCompany
}
