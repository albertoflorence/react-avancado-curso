import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormLink, FormWrapper } from 'components/Form'

import * as S from './FormSignInStyles'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const FormSignIn = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(s => ({
      ...s,
      [field]: value
    }))
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    const result = await signIn<'credentials'>('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
    setLoading(false)

    if (result?.url) {
      push(result.url)
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          startIcon={<Icon label="Email" />}
          placeholder="Email"
          name="email"
          type="email"
          onInputChange={handleInput('email')}
        />
        <TextField
          startIcon={<Icon label="Lock" />}
          placeholder="Password"
          type="password"
          name="password"
          onInputChange={handleInput('password')}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button fullWidth size="large" type="submit" loading={loading}>
          Sign in now
        </Button>
        <FormLink>
          Don&apos; t have an account?<Link href="/signup">Sign Up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
