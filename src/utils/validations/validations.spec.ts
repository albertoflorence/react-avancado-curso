import {
  loginValidate,
  signUpValidate,
  forgotPasswordValidate,
  resetPasswordValidate
} from './validations'

const mockValues = (obj: object) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _obj: any = {}
  for (const key in obj) {
    _obj[key] =
      key === 'confirmPassword'
        ? 'confirm password must match the password'
        : key + ' is not allowed to be empty'
  }
  return _obj
}

describe('loginValidate()', () => {
  it('should validate correctly', () => {
    const values = { email: '', password: '' }
    const sut = loginValidate(values)
    expect(sut).toEqual(mockValues(values))
  })
})

describe('signUpValidate()', () => {
  it('should validate correctly', () => {
    const values = { username: '', email: '', password: '', confirmPassword: ' ' }
    const sut = signUpValidate(values)
    expect(sut).toEqual(mockValues(values))
  })
})

describe('forgotPasswordValidate()', () => {
  it('should validate correctly', () => {
    const values = { email: '' }
    const sut = forgotPasswordValidate(values)
    expect(sut).toEqual(mockValues(values))
  })
})

describe('resetPasswordValidate()', () => {
  it('should validate correctly', () => {
    const values = { password: '', confirmPassword: ' ' }
    const sut = resetPasswordValidate(values)
    expect(sut).toEqual(mockValues(values))
  })
})
