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
}
const CartButton = ({ slug }: CartButtonProps) => {
  const { hasItem, addItem, removeItem } = useCart()
  const iconProps = icons[hasItem(slug) ? 'remove' : 'add'] as IconProps

  const handleClick = () => {
    hasItem(slug) ? removeItem(slug) : addItem(slug)
  }

  return <Button onClick={handleClick} startIcon={<Icon {...iconProps} />} size="small" />
}

export default CartButton
