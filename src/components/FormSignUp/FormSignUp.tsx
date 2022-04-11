import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import React, { useState } from 'react'

import { signUpValidate, SignUpErrorsValues } from 'utils/validations'
import { useSignUp } from 'services'
import FormMessage from 'components/FormMessage'

const FormSignUp = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  })

  const [fieldErrors, setFieldErrors] = useState<SignUpErrorsValues>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const [createUser] = useSignUp({ email: values.email, password: values.password }, setFormError)

  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(s => ({
      ...s,
      [field]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    const validateErrors = signUpValidate(values)
    if (validateErrors) {
      setFieldErrors(validateErrors)
      return
    }
    setFieldErrors({})

    setLoading(true)
    await createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
    if (formError) {
      setLoading(false)
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormMessage type="error">{formError}</FormMessage>
        <TextField
          startIcon={<Icon label="AccountCircle" />}
          placeholder="Username"
          name="username"
          onInputChange={handleInput('username')}
          error={fieldErrors?.username}
        />
        <TextField
          startIcon={<Icon label="Email" />}
          placeholder="Email"
          name="email"
          type="email"
          onInputChange={handleInput('email')}
          error={fieldErrors?.email}
        />
        <TextField
          startIcon={<Icon label="Lock" />}
          placeholder="Password"
          type="password"
          name="password"
          onInputChange={handleInput('password')}
          error={fieldErrors?.password}
        />
        <TextField
          startIcon={<Icon label="Lock" />}
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          onInputChange={handleInput('confirmPassword')}
          error={fieldErrors?.confirmPassword}
        />

        <Button fullWidth size="large" type="submit" loading={loading}>
          Sign up now
        </Button>
        <FormLink>
          Already have an account? <Link href="/login">Sign In</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
