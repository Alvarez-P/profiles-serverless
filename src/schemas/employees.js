const Joi = require('joi')

const create = Joi.object({
  profileId: Joi.string().required().messages({
    'string.base': 'El identificador del perfil debe ser un texto',
    'string.empty':
      'El identificador del perfil no debe ser un texto vacío vacía',
    'any.required': 'El identificador del perfil es un campo requerido',
  }),
  companyId: Joi.string().required().messages({
    'string.base': 'El identificador de la empresa debe ser un texto',
    'string.empty': 'El identificador de la empresa no debe ser un texto vacío vacía',
    'any.required': 'El identificador de la empresa es un campo requerido',
  })
})

const getByCompany = Joi.object({
  companyId: Joi.string().required().messages({
    'string.base': 'El identificador de la empresa debe ser un texto',
    'string.empty': 'El identificador de la empresa no debe ser un texto vacío vacía',
    'any.required': 'El identificador de la empresa es un campo requerido',
  })
})


module.exports = {
  create,
  getByCompany
}
