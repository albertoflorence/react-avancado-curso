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
