import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormLink, FormWrapper } from 'components/Form'

import { loginValidate, LoginErrorsValues } from 'utils/validations'

import * as S from './FormSignInStyles'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import FormMessage from 'components/FormMessage'

const FormSignIn = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [fieldErrors, setFieldErrors] = useState<LoginErrorsValues>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const { query, push } = useRouter()

  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(s => ({
      ...s,
      [field]: value
    }))
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = loginValidate(values)
    if (errors) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    const result = await signIn<'credentials'>('credentials', {
      email: values.email,
      password: values.password,
      callbackUrl: window.location.origin + (query.callbackUrl || ''),
      redirect: false
    })
    setLoading(false)

    if (result?.error) {
      setFormError('invalid email or password')
      return
    }

    push(result?.url || '/')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormMessage type="error">{formError}</FormMessage>
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
        <S.ForgotPassword href="/forgot-password">Forgot your password?</S.ForgotPassword>
        <Button fullWidth size="large" type="submit" loading={loading}>
          Sign in now
        </Button>
        <FormLink>
          Don&apos; t have an account?<Link href="/signup"> Sign Up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
