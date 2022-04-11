import Button from 'components/Button'
import { FormWrapper } from 'components/Form/FormStyles'
import TextField from 'components/TextField'
import Icon from 'components/Icon'

import { useState } from 'react'
import { resetPasswordValidate, ResetPasswordErrorsValues } from 'utils/validations'

const FormResetPassword = () => {
  const [values, setValues] = useState({ password: '', confirmPassword: '' })
  const [fieldErrors, setFieldErrors] = useState<ResetPasswordErrorsValues>()
  const [loading, setLoading] = useState(false)

  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(state => ({
      ...state,
      [field]: value
    }))
  }

  const handleSubmit = () => {
    const errors = resetPasswordValidate(values)
    if (errors) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setLoading(true)
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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
