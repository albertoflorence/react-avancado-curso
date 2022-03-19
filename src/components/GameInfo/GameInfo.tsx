import { Button, Heading, Icon } from 'components'
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

    <Price size="large">{price}</Price>
    <S.ButtonsWrapper>
      <Button startIcon={<Icon label="Favorite" />} text>
        Wishlist
      </Button>
      <Button startIcon={<Icon label="AddShoppingCart" />}>Add to cart</Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export interface PriceProps {
  children: React.ReactNode
  size?: 'small' | 'large'
  discount?: boolean
}

const Price = ({ children, ...props }: PriceProps) => (
  <S.PriceWrapper {...props}>{children}</S.PriceWrapper>
)

export default GameInfo
