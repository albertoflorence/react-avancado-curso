import { makeValidation } from './setup'

export interface LoginErrorsValues {
  email?: string
  password?: string
}

export const loginValidate = makeValidation<LoginErrorsValues>(['password', 'email'])

export interface SignUpErrorsValues {
  email?: string
  password?: string
  confirmPassword?: string
  username?: string
}

export const signUpValidate = makeValidation<SignUpErrorsValues>([
  'email',
  'password',
  'confirmPassword',
  'username'
])

export interface ForgotPasswordErrorsValues {
  email?: string
}

export const forgotPasswordValidate = makeValidation<ForgotPasswordErrorsValues>(['email'])

export interface ResetPasswordErrorsValues {
  password?: string
  confirmPassword?: string
}

export const resetPasswordValidate = makeValidation<ResetPasswordErrorsValues>([
  'password',
  'confirmPassword'
])
