const Repository = require('../db/repository')
const HttpError = require('../utils/httpError')

const isUnique =
  ({
    reqProperty,
    attribute,
    column = attribute,
    secondConditionAttr = null,
    secondConditionReqProperty = reqProperty,
    secondConditionColumn = secondConditionAttr,
    secondConditionValue = null,
    subjectForMessage = attribute,
    required,
    mapper = {}
  }) =>
  async (req, res, next) => {
    try {
      const value = req[reqProperty][attribute]
      if (!value && required)
        throw new HttpError(400, `${subjectForMessage} es requerido`, {
          field: [reqProperty, column],
          value,
        })

      if (value) {
        const filters = {
          [column]: value,
        }
        if (secondConditionAttr)
          filters[secondConditionColumn] =
            secondConditionValue || req[secondConditionReqProperty][secondConditionAttr]
        const item = await Repository.query(filters)
        if (item.Count) {
          throw new HttpError(400, `${subjectForMessage} ya ha sido registrado`, {
            field: [reqProperty, mapper[attribute]],
            value
          })
        }
      }
      next()
    } catch (error) {
      next(error)
    }
  }

module.exports = isUnique
