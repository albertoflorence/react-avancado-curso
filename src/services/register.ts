import { MutationTuple, useMutation } from '@apollo/client'
import { MutationRegister, MutationRegisterVariables } from 'graphql/generated/MutationRegister'
import { MUTATION_REGISTER } from 'graphql/mutations'
import { signIn } from 'next-auth/react'

export const useSignUp = (
  {
    email,
    password
  }: {
    email: string
    password: string
  },
  onError: (err: string) => void
): MutationTuple<MutationRegister, MutationRegisterVariables> => {
  const [fn, { error, ...rest }] = useMutation<MutationRegister, MutationRegisterVariables>(
    MUTATION_REGISTER,
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) =>
        onError(error.graphQLErrors[0].extensions?.exception?.data?.message[0].messages[0].message),
      onCompleted: () =>
        signIn<'credentials'>('credentials', {
          email: email,
          password: password,
          callbackUrl: '/'
        })
    }
  )

  return [fn, { error, ...rest }]
}

export const sendEmailForgotPassword = async (email: string) =>
  await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  })
    .then(r => r.json())
    .then(result => (result.message ? { error: result.message[0].messages[0].message } : result))

export interface ResetPasswordProps {
  password: string
  passwordConfirmation: string
  code: string
}

export const sendResetPassword = async (props: ResetPasswordProps) =>
  await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(props)
  })
    .then(r => r.json())
    .then(result => (result.message ? { error: result.message[0].messages[0].message } : result))
