import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'
import Container from 'components/Container'
import Base from 'templates/Base'

import * as S from './CartStyles'

export interface CartTemplateProps {
  recommended?: {
    gameCards: GameCardProps[]
    highlight?: HighlightProps
  }
  paymentOptions: Omit<PaymentOptionsProps, 'handlePayment'>
}

const Cart = ({ recommended, paymentOptions }: CartTemplateProps) => {
  const handlePayment = () => ({})
  return (
    <Base>
      <Container>
        <Heading line="bottom" lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList />
          <PaymentOptions {...paymentOptions} handlePayment={handlePayment} />
        </S.Content>

        <Divider />

        {recommended && (
          <Showcase
            title="You may like these games"
            gameCards={recommended.gameCards}
            highlight={recommended.highlight}
          />
        )}
      </Container>
    </Base>
  )
}

export default Cart
