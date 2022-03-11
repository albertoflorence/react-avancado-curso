import { Button, Icon, Image, Ribbon } from 'components'
import * as S from './GameCardStyles'

export interface GameCardProps {
  image: string
  title: string
  subtitle: string
  price: string
  discount?: string
  favorite: boolean
  ribbon?: string
}

const GameCard = ({ title, subtitle, image, price, discount, favorite, ribbon }: GameCardProps) => (
  <S.Wrapper>
    {ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
    <S.ImageBox>
      <Image src={image} layout="fill" objectFit="cover" alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Info>
      <S.FavButton role="button">
        {favorite ? (
          <Icon aria-label="Remove from Wishlist" label="Favorite" />
        ) : (
          <Icon aria-label="Add to Wishlist" label="FavoriteBorder" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {discount && <S.Price discount>{price}</S.Price>}
        <div>
          <S.Price>{discount || price}</S.Price>
          <Button startIcon={<Icon label="AddShoppingCart" />} size="small" />
        </div>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
