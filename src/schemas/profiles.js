const Joi = require('joi')

const create = Joi.object({
  userId: Joi.string().required().messages({
    'string.base': 'El identificador de usuario debe ser un texto',
    'string.empty':
      'El identificador de usuario no debe ser un texto vacío vacía',
    'any.required': 'El identificador de usuario es un campo requerido',
  }),
  lastname: Joi.string().required().messages({
    'string.base': 'El nombre debe ser un texto',
    'string.empty': 'El nombre no debe ser un texto vacío vacía',
    'any.required': 'El nombre es un campo requerido',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'La correo electrónico debe ser un texto',
    'string.empty': 'La correo electrónico no debe ser un campo vacío',
    'string.email': 'La correo electrónico tiene un formato inválido',
    'any.required': 'La correo electrónico es un campo requerido',
  }),
  firstname: Joi.string().required().messages({
    'string.base': 'El apellido debe ser un texto',
    'string.empty': 'El apellido no debe ser un campo vacío',
    'any.required': 'El apellido es un campo requerido',
  }),
  phone_number: Joi.string()
    .regex(/^[0-9]{10}$/)
    .optional()
    .messages({
      'string.base': 'El número de teléfono debe ser un texto',
      'string.pattern.base': 'Número de teléfono inválido',
    }),
  birthday: Joi.date().optional().messages({
    'date.base': 'La fecha de nacimiento debe ser una fecha válida',
  }),
  rfc: Joi.string()
    .regex(
      /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])([A-Z]|[0-9]){2}([A]|[0-9]){1})?$/
    )
    .optional()
    .messages({
      'string.base': 'La url de invitación debe ser un texto',
      'string.pattern.base': 'RFC inválido',
    }),
  curp: Joi.string()
    .regex(
      /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
    )
    .optional()
    .messages({
      'string.base': 'El CURP debe ser un texto',
      'string.pattern.base': 'CURP inválido',
    }),
  age: Joi.number().integer().optional().messages({
    'number.base': 'La edad debe ser un número',
    'number.integer': 'La edad debe ser un número entero'
  }),
})

module.exports = {
  create,
}
