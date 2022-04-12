import { GameCardProps } from 'components/GameCard'
import { createContext, useContext, useEffect, useState } from 'react'
import { useGetWishlist, useUpdateWishlist } from 'services/wishlist'

export interface WishlistContextData {
  items: GameCardProps[]
  hasItem: (id: string) => boolean
  addItem: (id: string) => void
  removeItem: (id: string) => void
  loading: boolean
}

export const wishlistDefaultValues = {
  items: [],
  hasItem: () => false,
  addItem: () => undefined,
  removeItem: () => undefined,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(wishlistDefaultValues)

export interface WishlistProviderProps {
  children: React.ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<GameCardProps[]>([])

  const { games, loading } = useGetWishlist()
  const [updateWishlist, { loading: updateLoading }] = useUpdateWishlist(setWishlist)

  useEffect(() => {
    setWishlist(games)
  }, [games])

  const getListIds = () => wishlist.map(game => game.id)

  const hasItem = (id: string) => getListIds().includes(id)
  const addItem = (id: string) => updateWishlist(getListIds().concat(id))
  const removeItem = (id: string) => updateWishlist(getListIds().filter(item => item !== id))

  return (
    <WishlistContext.Provider
      value={{
        items: wishlist,
        hasItem,
        addItem,
        removeItem,
        loading: loading || updateLoading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
