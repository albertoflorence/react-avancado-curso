import GameItem, { GameItemProps } from 'components/GameItem'
import * as S from './CartListStyles'

export interface CartListProps {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items && items.map(item => <GameItem key={item.title} {...item} />)}{' '}
    <S.Total>
      <span>Total: </span>
      <span>{total}</span>
    </S.Total>
  </S.Wrapper>
)

export default CartList
