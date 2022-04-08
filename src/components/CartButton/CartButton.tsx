import Button from 'components/Button'
import Icon, { IconProps } from 'components/Icon'
import { useCart } from 'hooks'

const icons = {
  add: {
    label: 'AddShoppingCart',
    title: 'Add Shopping Cart'
  },
  remove: {
    label: 'RemoveShoppingCart',
    title: 'Remove Shopping Cart'
  }
}

export interface CartButtonProps {
  slug: string
  size?: 'small' | 'large'
  hasText?: boolean
}
const CartButton = ({ slug, size = 'small', hasText }: CartButtonProps) => {
  const { hasItem, addItem, removeItem } = useCart()
  const isInCart = hasItem(slug)
  const iconProps = icons[isInCart ? 'remove' : 'add'] as IconProps
  const text = isInCart ? 'Remove from cart' : 'Add to cart'

  const handleClick = () => {
    isInCart ? removeItem(slug) : addItem(slug)
  }

  return (
    <Button onClick={handleClick} startIcon={<Icon {...iconProps} />} size={size}>
      {hasText && text}
    </Button>
  )
}

export default CartButton
