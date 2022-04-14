import Button from 'components/Button'
import Icon, { IconProps } from 'components/Icon'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export interface WishlistButtonProps {
  id: string
  hasText?: boolean
  size?: 'small' | 'large'
}

const WishlistButton = ({ id, hasText, size }: WishlistButtonProps) => {
  const { hasItem, removeItem, addItem } = useWishlist()
  const [loading, setLoading] = useState(false)
  const { status } = useSession()
  const { push } = useRouter()

  if (status == 'loading') return null

  const isInWishlist = hasItem(id)

  const icons = {
    add: { label: 'FavoriteBorder', title: 'Add to Wishlist' },
    remove: { label: 'Favorite', title: 'Remove from Wishlist' }
  }

  const iconProps = icons[isInWishlist ? 'remove' : 'add'] as IconProps

  const handleClick = async () => {
    if (status === 'unauthenticated') {
      push('/login')
      return null
    }
    setLoading(true)
    isInWishlist ? await removeItem(id) : await addItem(id)
    setLoading(false)
  }

  const buttonText = isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'

  return (
    <Button
      loading={loading}
      size={size}
      text
      onClick={handleClick}
      startIcon={<Icon {...iconProps} />}
    >
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
