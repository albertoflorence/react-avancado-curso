import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'
import Profile from 'templates/Profile'

export default function Index(props: CardsListProps) {
  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(): Promise<{ props: CardsListProps }> {
  return {
    props: {
      cards: mockCards
    }
  }
}
