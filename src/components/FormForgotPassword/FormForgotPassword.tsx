import Button from 'components/Button'
import { FormWrapper } from 'components/Form/FormStyles'
import TextField from 'components/TextField'
import Icon from 'components/Icon'

import { useState } from 'react'
import { forgotPasswordValidate, ForgotPasswordErrorsValues } from 'utils/validations'

const FormForgotPassword = () => {
  const [values, setValues] = useState({ email: '' })
  const [fieldErrors, setFieldErrors] = useState<ForgotPasswordErrorsValues>()
  const [loading, setLoading] = useState(false)

  const handleInput = (value: string) => {
    setValues({ email: value })
  }

  const handleSubmit = () => {
    const errors = forgotPasswordValidate(values)
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
          startIcon={<Icon label="Email" />}
          placeholder="Email"
          name="email"
          type="email"
          onInputChange={handleInput}
          error={fieldErrors?.email}
        />

        <Button fullWidth size="large" type="submit" loading={loading}>
          Send email
        </Button>
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
