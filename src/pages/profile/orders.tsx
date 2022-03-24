import OrdersList, { OrdersListProps } from 'components/OrdersList'
import mock from 'components/OrdersList/mock'
import Profile from 'templates/Profile'

export default function Index(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getStaticProps(): Promise<{ props: OrdersListProps }> {
  return {
    props: {
      items: mock
    }
  }
}
