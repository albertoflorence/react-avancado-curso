import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'
import { GetServerSidePropsContext } from 'next'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: CardsListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      cards: mockCards
    }
  }
}
