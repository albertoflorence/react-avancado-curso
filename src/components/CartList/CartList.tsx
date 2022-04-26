import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import Link from 'components/Link'
import Loading from 'components/Loading'
import { useCart } from 'hooks'
import * as S from './CartListStyles'

export interface CartListProps {
  hasButton?: boolean
}

const CartList = ({ hasButton }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.LoadingWrapper>
        <Loading type="circular" color="primary" />
      </S.LoadingWrapper>
    )
  }

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
    <S.Wrapper data-cy="cart-list">
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
