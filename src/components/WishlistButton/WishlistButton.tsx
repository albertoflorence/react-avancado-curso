import Button from 'components/Button'
import Icon, { IconProps } from 'components/Icon'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export interface WishlistButtonProps {
  id: string
  hasText?: boolean
}

const WishlistButton = ({ id, hasText }: WishlistButtonProps) => {
  const { hasItem, removeItem, addItem } = useWishlist()
  const { status } = useSession()
  const { push } = useRouter()

  if (status == 'loading') return null

  const icons = {
    add: { label: 'FavoriteBorder', title: 'Add to Wishlist' },
    remove: { label: 'Favorite', title: 'Remove from Wishlist' }
  }

  const isInWishlist = hasItem(id)

  const iconProps = icons[isInWishlist ? 'remove' : 'add'] as IconProps

  const handleClick = () => {
    if (status === 'unauthenticated') {
      push('/login')
      return null
    }
    isInWishlist ? removeItem(id) : addItem(id)
  }

  const buttonText = isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'

  return (
    <Button text onClick={handleClick} startIcon={<Icon {...iconProps} />}>
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
