import OrdersList, { OrdersListProps } from 'components/OrdersList'
import mock from 'components/OrdersList/mock'
import { GetServerSidePropsContext } from 'next'
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
  return {
    props: {
      session,
      items: mock
    }
  }
}
