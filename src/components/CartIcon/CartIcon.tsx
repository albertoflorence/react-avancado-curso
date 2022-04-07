import Icon from 'components/Icon'
import { useCart } from 'hooks'

const CartIcon = () => {
  const { quantity } = useCart()
  return (
    <Icon
      label="ShoppingCart"
      title="Shopping Cart"
      size={24}
      badge={quantity}
      aria-label="Open Shopping Cart"
    />
  )
}

export default CartIcon
