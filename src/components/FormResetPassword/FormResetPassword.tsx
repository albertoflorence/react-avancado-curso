import Button from 'components/Button'
import { FormWrapper } from 'components/Form/FormStyles'
import TextField from 'components/TextField'
import Icon from 'components/Icon'

import React, { useState } from 'react'
import { resetPasswordValidate, ResetPasswordErrorsValues } from 'utils/validations'
import { sendResetPassword } from 'services'
import FormMessage from 'components/FormMessage'
import { useRouter } from 'next/router'

const FormResetPassword = () => {
  const [values, setValues] = useState({ password: '', confirmPassword: '' })
  const [fieldErrors, setFieldErrors] = useState<ResetPasswordErrorsValues>()
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

  const { query, push } = useRouter()

  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(state => ({
      ...state,
      [field]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = resetPasswordValidate(values)
    if (errors) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})

    setLoading(true)
    const result = await sendResetPassword({
      password: values.password,
      passwordConfirmation: values.confirmPassword,
      code: (query.code as string) || ''
    })

    if (result?.error) {
      setLoading(false)
      setFormError(result.error)
      return
    } else {
      push('/login')
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormMessage type="error">{formError}</FormMessage>
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
          Send email
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormResetPassword
