import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { getProfile } from 'services'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<FormProfileProps>> {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  const data = await getProfile(session)

  return {
    props: {
      ...data
    }
  }
}
