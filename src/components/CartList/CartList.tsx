import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'
import Link from 'components/Link'
import * as S from './CartListStyles'

export interface CartListProps {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton }: CartListProps) => (
  <S.Wrapper>
    {items && items.map(item => <GameItem key={item.title} {...item} />)}
    <S.Total>
      {!hasButton && <span>Total: </span>}
      <S.TotalText>{total}</S.TotalText>
      {hasButton && (
        <Button as={Link} href="#">
          Buy it now
        </Button>
      )}
    </S.Total>
  </S.Wrapper>
)

export default CartList
