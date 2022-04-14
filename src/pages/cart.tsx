import Cart, { CartTemplateProps } from 'templates/Cart'
import mockPayments from 'components/PaymentOptions/mock'
import { getRecommended } from 'services'
import { GetServerSidePropsContext } from 'next/types'
import protectedRoutes from 'utils/protectedRoutes'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  const recommended = await getRecommended()
  return {
    props: {
      session,
      recommended,
      paymentOptions: {
        cards: mockPayments
      }
    }
  }
}
