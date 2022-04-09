import Joi, { ValidationResult } from 'joi'

const fieldValidations = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,100}$/)
    .min(6)
    .max(100)
    .messages({ 'string.pattern.base': 'password must have uppercase letters and numbers' })
    .required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password must match the password' }),
  username: Joi.string().min(5).max(16).required()
}

export interface SigInValues {
  email: string
  password: string
}

export function sigInValidate(values: SigInValues) {
  const { password, email } = fieldValidations
  const schema = Joi.object({ password, email })
  return getError<SigInValues>(schema.validate(values, { abortEarly: false }))
}

export interface SigUpValues {
  email: string
  password: string
  confirmPassword: string
  username: string
}

export function signUpValidate(values: SigUpValues) {
  const { password, email, username, confirmPassword } = fieldValidations
  const schema = Joi.object({ password, email, username, confirmPassword })

  return getError<SigUpValues>(schema.validate(values, { abortEarly: false }))
}

const getError = <T>({ error }: ValidationResult): T | undefined =>
  error &&
  error.details.reduce(
    (obj, { message, path }) => ({
      ...obj,
      [path.join('')]: message.replace(/"/g, '')
    }),
    {} as T
  )
