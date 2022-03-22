import Button from 'components/Button'
import Heading from 'components/Heading'
import Icon from 'components/Icon'
import Price from 'components/Price'

import * as S from './GameInfoStyles'

export interface GameInfoProps {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading line="bottom" lineColor="primary" color="black">
      {title}
    </Heading>
    <S.Description>{description}</S.Description>

    <Price>{price}</Price>
    <S.ButtonsWrapper>
      <Button size="large" startIcon={<Icon label="FavoriteBorder" />} text>
        Wishlist
      </Button>
      <Button size="large" startIcon={<Icon label="AddShoppingCart" />}>
        Add to cart
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
