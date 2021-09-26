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
    nameForMessage: 'perfil de usuario',
    secondConditionColumn: 'sk',
    secondConditionValue: HASH_KEYS.PROFILES,
    required: true,
  }),
  isUnique({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'sk',
    nameForMessage: 'El empleado',
    secondConditionAttr: 'pk',
    required: false,
  }),
  employeeControllers.create
)

module.exports = router