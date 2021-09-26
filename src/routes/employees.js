const express = require('express')
const router = express.Router()
const employeeControllers = require('../controllers/employees')
const employeeSchemas = require('../schemas/employees')
const { REQ_ATTR } = require('./constants')
const { validate, exist, transformer, isUnique } = require('../middlewares')
const { EmployeeMapper } = require('../middlewares/transformer/mappers')
const { HASH_KEYS } = require('../db/constants')

router.post(
  '/',
  validate(employeeSchemas.create, REQ_ATTR.BODY),
  transformer(EmployeeMapper, REQ_ATTR.BODY),
  exist({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'sk',
    column: 'pk',
    subjectForMessage: 'El perfil de usuario',
    secondConditionColumn: 'sk',
    secondConditionValue: HASH_KEYS.PROFILES,
    required: true,
    mapper: EmployeeMapper
  }),
  isUnique({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'sk',
    subjectForMessage: 'El empleado',
    secondConditionAttr: 'pk',
    required: false,
    mapper: EmployeeMapper
  }),
  employeeControllers.create
)

router.get(
  '/:companyId',
  validate(employeeSchemas.getByCompany, REQ_ATTR.PARAMS),
  transformer(EmployeeMapper, REQ_ATTR.PARAMS),
  employeeControllers.getByCompany
)

module.exports = router