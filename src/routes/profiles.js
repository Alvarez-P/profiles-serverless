const express = require('express')
const router = express.Router()
const profileControllers = require('../controllers/profiles')
const profilesSchemas = require('../schemas/profiles')
const { REQ_ATTR } = require('./constants')
const { validate, isUnique, transformer } = require('../middlewares')
const { ProfileMapper } = require('../middlewares/transformer/mappers')
const { HASH_KEYS } = require('../db/constants')

router.post(
  '/',
  validate(profilesSchemas.create, REQ_ATTR.BODY),
  transformer(ProfileMapper, REQ_ATTR.BODY),
  isUnique({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'gsi1_pk',
    subjectForMessage: 'El usuario',
    secondConditionColumn: 'sk',
    secondConditionValue: HASH_KEYS.PROFILES,
    required: true,
  }),
  isUnique({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'gsi2_pk',
    subjectForMessage: 'El email',
    secondConditionColumn: 'sk',
    secondConditionValue: HASH_KEYS.PROFILES,
    required: true,
  }),
  isUnique({
    reqProperty: REQ_ATTR.BODY,
    attribute: 'gsi3_pk',
    subjectForMessage: 'El CURP',
    secondConditionColumn: 'sk',
    secondConditionValue: HASH_KEYS.PROFILES,
    required: false,
  }),
  profileControllers.create
)

module.exports = router
