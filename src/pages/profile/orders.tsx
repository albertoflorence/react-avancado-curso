import OrdersList, { OrdersListProps } from 'components/OrdersList'

import { GetServerSidePropsContext } from 'next'
import { getOrders } from 'services/orders'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: OrdersListProps) {
  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  const items = await getOrders(session.id as number, session)

  return {
    props: {
      session,
      items
    }
  }
}
