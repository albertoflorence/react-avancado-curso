import { sigInValidate, SigInValues, signUpValidate, SigUpValues } from './validations'

const SigInValuesMock = (values?: Partial<SigInValues>) => ({
  email: 'valid@mail.com',
  password: 'Password1',
  ...values
})

const SigUpValuesMock = (values?: Partial<SigUpValues>) => ({
  username: 'username',
  email: 'valid@mail.com',
  password: 'Password1',
  confirmPassword: 'Password1',
  ...values
})

describe('sigInValidate()', () => {
  it('should validate empty fields', () => {
    const values = { email: '', password: '' }
    const sut = sigInValidate(values)
    expect(sut).toEqual({
      email: 'email is not allowed to be empty',
      password: 'password is not allowed to be empty'
    })
  })

  it('should validate the email', () => {
    const values = SigInValuesMock({ email: 'invalid-email' })
    const sut = sigInValidate(values)
    expect(sut).toEqual({
      email: 'email must be a valid email'
    })
  })

  it('should validate the password min length', () => {
    const values = SigInValuesMock({ password: '12345' })
    const sut = sigInValidate(values)
    expect(sut).toEqual({
      password: 'password length must be at least 6 characters long'
    })
  })

  it('should validate the password max length', () => {
    const values = SigInValuesMock({ password: '1'.repeat(101) })
    const sut = sigInValidate(values)
    expect(sut).toEqual({
      password: 'password length must be less than or equal to 100 characters long'
    })
  })

  it('should validate the password pattern', () => {
    const values = SigInValuesMock({ password: 'password' })
    const sut = sigInValidate(values)
    expect(sut).toEqual({
      password: 'password must have uppercase letters and numbers'
    })
  })

  it('should return undefined when valid is provided', () => {
    const values = SigInValuesMock()
    const sut = sigInValidate(values)
    expect(sut).toEqual(undefined)
  })
})

describe('signUpValidate()', () => {
  it('validate empty fields', () => {
    const values = { username: '', email: '', password: '', confirmPassword: '' }
    const sut = signUpValidate(values)
    expect(sut).toEqual({
      email: 'email is not allowed to be empty',
      password: 'password is not allowed to be empty',
      username: 'username is not allowed to be empty'
    })
  })

  it('validate username min length', () => {
    const values = SigUpValuesMock({ username: '1234' })

    const sut = signUpValidate(values)
    expect(sut).toEqual({
      username: 'username length must be at least 5 characters long'
    })
  })

  it('validate username max length', () => {
    const values = SigUpValuesMock({ username: '1'.repeat(17) })

    const sut = signUpValidate(values)
    expect(sut).toEqual({
      username: 'username length must be less than or equal to 16 characters long'
    })
  })

  it('validate confirmPassword', () => {
    const values = SigUpValuesMock({ confirmPassword: 'password1' })

    const sut = signUpValidate(values)
    expect(sut).toEqual({
      confirmPassword: 'confirm password must match the password'
    })
  })

  it('should return undefined when valid is provided', () => {
    const values = SigUpValuesMock()

    const sut = signUpValidate(values)
    expect(sut).toEqual(undefined)
  })
})
