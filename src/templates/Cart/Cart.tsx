import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList from 'components/CartList'
import PaymentForm from 'components/PaymentForm'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'
import Container from 'components/Container'
import Base from 'templates/Base'

import * as S from './CartStyles'
import { Session } from 'next-auth'

export interface CartTemplateProps {
  session: Session
  recommended?: {
    gameCards: GameCardProps[]
    highlight?: HighlightProps
  }
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY as string)

const Cart = ({ recommended, session }: CartTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading line="bottom" lineColor="secondary">
          My Cart
        </Heading>

        <S.Content>
          <CartList />
          <Elements stripe={stripePromise}>
            <PaymentForm session={session} />
          </Elements>
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
