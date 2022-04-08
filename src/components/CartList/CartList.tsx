import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import Link from 'components/Link'
import { useCart } from 'hooks'
import * as S from './CartListStyles'

export interface CartListProps {
  hasButton?: boolean
}

const CartList = ({ hasButton }: CartListProps) => {
  const { items, total } = useCart()

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
      <S.Content>
        {items.map(item => (
          <GameItem key={item.title} {...item} />
        ))}
      </S.Content>
      <S.Total>
        {!hasButton && <span>Total: </span>}
        <S.TotalText>{total}</S.TotalText>
        {hasButton && (
          <Button as={Link} href="/cart">
            Buy it now
          </Button>
        )}
      </S.Total>
    </S.Wrapper>
  )
}

export default CartList
