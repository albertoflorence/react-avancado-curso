import Button from 'components/Button'
import { FormWrapper } from 'components/Form/FormStyles'
import TextField from 'components/TextField'
import Icon from 'components/Icon'

import React, { useState } from 'react'
import { forgotPasswordValidate, ForgotPasswordErrorsValues } from 'utils/validations'
import { sendEmailForgotPassword } from 'services'
import FormMessage, { FormMessageProps } from 'components/FormMessage'

const FormForgotPassword = () => {
  const [values, setValues] = useState({ email: '' })
  const [fieldErrors, setFieldErrors] = useState<ForgotPasswordErrorsValues>()
  const [formMessage, setFormMessage] = useState<FormMessageProps>({})
  const [loading, setLoading] = useState(false)

  const handleInput = (value: string) => {
    setValues({ email: value })
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const errors = forgotPasswordValidate(values)
    if (errors) {
      setFieldErrors(errors)
      return
    }
    setFieldErrors({})
    setLoading(true)
    const result = await sendEmailForgotPassword(values.email)
    setLoading(false)

    if (result.error) {
      setFormMessage({ type: 'error', children: result.error })
      return
    }

    setFormMessage({ type: 'success', children: 'You just received an email!' })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormMessage {...formMessage} />
        {!(formMessage.type === 'success') && (
          <>
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
          </>
        )}
      </form>
    </FormWrapper>
  )
}

export default FormForgotPassword
