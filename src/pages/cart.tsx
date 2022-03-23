import Cart, { CartTemplateProps } from 'templates/Cart'
import mockHighlight from 'components/Highlight/mock'
import mockGameCards from 'components/GameCardSlider/mock'
import mockCartList from 'components/CartList/mock'
import mockPayments from 'components/PaymentOptions/mock'

export default function Index(props: CartTemplateProps) {
  return <Cart {...props} />
}

export async function getServerSideProps(): Promise<{ props: CartTemplateProps }> {
  return {
    props: {
      recommended: {
        gameCards: mockGameCards,
        highlight: mockHighlight
      },
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
