import CartButton from 'components/CartButton'
import Icon from 'components/Icon'
import Image from 'components/Image'
import Price from 'components/Price'
import Ribbon from 'components/Ribbon'
import * as S from './GameCardStyles'

export interface GameCardProps {
  id: string
  slug: string
  image: string
  title: string
  subtitle: string
  price: string
  discount?: string
  favorite: boolean
  ribbon?: string
}

const GameCard = ({
  title,
  subtitle,
  image,
  price,
  discount,
  favorite,
  ribbon,
  slug
}: GameCardProps) => (
  <S.Wrapper>
    {ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
    <S.ImageBox href={`/game/${slug}`}>
      <Image src={image} layout="fill" objectFit="cover" alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info href={`/game/${slug}`}>
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
        {discount && <Price discount>{price}</Price>}
        <div>
          <Price>{discount || price}</Price>
          <CartButton slug={slug} />
        </div>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
