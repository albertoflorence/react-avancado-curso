import Button from 'components/Button'
import Icon from 'components/Icon'
import Link from 'components/Link'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import React, { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations'
import { MutationRegister, MutationRegisterVariables } from 'graphql/generated/MutationRegister'

interface ValuesProps extends UsersPermissionsRegisterInput {
  confirmPassword: string
}

const FormSignUp = () => {
  const [values, setValues] = useState<ValuesProps>({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  })

  const [createUser] = useMutation<MutationRegister, MutationRegisterVariables>(MUTATION_REGISTER)
  const handleInput = (field: keyof typeof values) => (value: string) => {
    setValues(s => ({
      ...s,
      [field]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()

    await createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          startIcon={<Icon label="AccountCircle" />}
          placeholder="Username"
          name="username"
          onInputChange={handleInput('username')}
        />
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
        <TextField
          startIcon={<Icon label="Lock" />}
          placeholder="Confirm password"
          type="password"
          name="confirm-password"
          onInputChange={handleInput('confirmPassword')}
        />

        <Button fullWidth size="large" type="submit">
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
