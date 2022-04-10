import { FormProfileProps } from 'components/FormProfile'
import { QueryProfileMe } from 'graphql/generated/QueryProfileMe'
import { QUERY_PROFILE_ME } from 'graphql/queries/profile'
import { Session } from 'next-auth'
import { initializeApollo } from 'utils/apollo'

export const getProfile = async (session: Session): Promise<FormProfileProps> => {
  const client = initializeApollo(undefined, session)
  const { data } = await client.query<QueryProfileMe>({
    query: QUERY_PROFILE_ME
  })

  return {
    username: data?.me?.username,
    email: data?.me?.email
  }
}
