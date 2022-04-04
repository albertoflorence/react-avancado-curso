import Cart, { CartTemplateProps } from 'templates/Cart'
import mockCartList from 'components/CartList/mock'
import mockPayments from 'components/PaymentOptions/mock'
import { getRecommended } from 'services'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(): Promise<{ props: CartTemplateProps }> {
  const recommended = await getRecommended()
  return {
    props: {
      recommended,
      cartList: {
        items: mockCartList,
        total: 'R$300,00'
      },
      paymentOptions: {
        cards: mockPayments
      }
    }
  }
}
