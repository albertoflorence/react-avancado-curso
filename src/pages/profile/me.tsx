import FormProfile, { FormProfileProps } from 'components/FormProfile'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  return {
    props: {
      session,
      username: session.user?.name,
      email: session.user?.email
    }
  }
}
