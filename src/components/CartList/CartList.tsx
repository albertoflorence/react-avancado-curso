import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Link from 'components/Link'
import * as S from './CartListStyles'

export interface CartListProps {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton }: CartListProps) => {
  if (!items.length) {
    return (
      <S.EmptyWrapper>
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore games and offers"
          toHome
          size="small"
        />
      </S.EmptyWrapper>
    )
  }

  return (
    <S.Wrapper>
      {items.map(item => (
        <GameItem key={item.title} {...item} />
      ))}
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
}

export default CartList
