import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'
import Container from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

import * as S from './CartStyles'

export interface CartTemplateProps {
  recommended: {
    gameCards: GameCardProps[]
    highlight: HighlightProps
  }
  cartList: CartListProps
  paymentOptions: Omit<PaymentOptionsProps, 'handlePayment'>
}

const Cart = ({ recommended, cartList, paymentOptions }: CartTemplateProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading line="bottom" lineColor="secondary">
          My Cart
        </Heading>

        {cartList.items?.length ? (
          <S.Content>
            <CartList {...cartList} />
            <PaymentOptions {...paymentOptions} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            description="Go back to the store and explore the games and offers"
            title="Your cart is empty"
          />
        )}
        <Divider />

        <Showcase
          title="You may like these games"
          gameCards={recommended.gameCards}
          highlight={recommended.highlight}
        />
      </Container>
    </Base>
  )
}

export default Cart
