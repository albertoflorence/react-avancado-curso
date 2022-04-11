import { makeValidation } from './setup'

describe('makeValidation()', () => {
  it('should validate empty fields', () => {
    const values = { email: '', password: '', username: '', confirmPassword: '' }
    const sut = makeValidation(['username', 'email', 'password', 'confirmPassword'])(values)

    expect(sut).toEqual({
      username: 'username is not allowed to be empty',
      email: 'email is not allowed to be empty',
      password: 'password is not allowed to be empty'
    })
  })

  it('should validate the email', () => {
    const values = { email: 'invalid-email' }
    const sut = makeValidation(['email'])(values)

    expect(sut).toEqual({
      email: 'email must be a valid email'
    })
  })

  it('should validate the password min length', () => {
    const values = { password: '12345' }
    const sut = makeValidation(['password'])(values)

    expect(sut).toEqual({
      password: 'password length must be at least 6 characters long'
    })
  })

  it('should validate the password max length', () => {
    const values = { password: '1'.repeat(101) }
    const sut = makeValidation(['password'])(values)

    expect(sut).toEqual({
      password: 'password length must be less than or equal to 100 characters long'
    })
  })

  it('should validate the password pattern', () => {
    const values = { password: 'password' }
    const sut = makeValidation(['password'])(values)

    expect(sut).toEqual({
      password: 'password must have uppercase letters and numbers'
    })
  })

  it('should return undefined when valid values is provided', () => {
    const values = {
      username: 'username',
      email: 'valid@mail.com',
      password: 'Password1',
      confirmPassword: 'Password1'
    }
    const sut = makeValidation(['username', 'email', 'password', 'confirmPassword'])(values)
    expect(sut).toEqual(undefined)
  })
})
