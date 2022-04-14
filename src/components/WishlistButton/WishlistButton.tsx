import Button from 'components/Button'
import Icon, { IconProps } from 'components/Icon'
import Loading from 'components/Loading'
import { useWishlist } from 'hooks/useWishlist'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export interface WishlistButtonProps {
  id: string
  hasText?: boolean
}

const WishlistButton = ({ id, hasText }: WishlistButtonProps) => {
  const { hasItem, removeItem, addItem } = useWishlist()
  const [loading, setLoading] = useState(false)

  const { status } = useSession()
  const { push } = useRouter()

  if (status == 'loading') return null

  const icons = {
    add: { label: 'FavoriteBorder', title: 'Add to Wishlist' },
    remove: { label: 'Favorite', title: 'Remove from Wishlist' }
  }

  const isInWishlist = hasItem(id)

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

  return loading ? (
    <Loading type="circular" color="primary" />
  ) : (
    <Button text onClick={handleClick} startIcon={<Icon {...iconProps} />}>
      {hasText && buttonText}
    </Button>
  )
}

export default WishlistButton
