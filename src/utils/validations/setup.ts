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
  confirmPassword: Joi.valid(Joi.ref('password')).messages({
    'any.only': 'confirm password must match the password'
  }),
  username: Joi.string().min(5).max(16).required()
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

export type Validations = typeof fieldValidations

export const makeValidation =
  <T>(validations: Array<keyof Validations>) =>
  (values: T) => {
    const object = validations.reduce(
      (obj, key) => ({
        ...obj,
        [key]: fieldValidations[key]
      }),
      {} as Validations
    )

    const schema = Joi.object(object)
    return getError<T>(schema.validate(values, { abortEarly: false }))
  }
