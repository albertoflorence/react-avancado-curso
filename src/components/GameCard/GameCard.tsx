import CartButton from 'components/CartButton'
import Image from 'components/Image'
import Price from 'components/Price'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'
import * as S from './GameCardStyles'

export interface GameCardProps {
  id: string
  slug: string
  image: string
  title: string
  subtitle: string
  price: string
  discount?: string
  ribbon?: string
}

const GameCard = ({ id, title, subtitle, image, price, discount, ribbon, slug }: GameCardProps) => (
  <S.Wrapper data-cy="game-card">
    {ribbon && <Ribbon size="small">{ribbon}</Ribbon>}
    <S.ImageBox href={`/game/${slug}`}>
      <Image src={image} layout="fill" objectFit="cover" alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info href={`/game/${slug}`}>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Info>
      <S.FavButton>
        <WishlistButton id={id} />
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
