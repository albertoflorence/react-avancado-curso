import Heading from 'components/Heading'
import Price from 'components/Price'
import CartButton from 'components/CartButton'

import * as S from './GameInfoStyles'
import WishlistButton from 'components/WishlistButton'

export interface GameInfoProps {
  id: string
  title: string
  description: string
  price: string
  slug: string
}

const GameInfo = ({ title, description, price, slug, id }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading line="bottom" lineColor="primary" color="black">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>

    <Price>{price}</Price>
    <S.ButtonsWrapper>
      <WishlistButton id={id} size="large" hasText />
      <CartButton size="large" slug={slug} hasText />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
