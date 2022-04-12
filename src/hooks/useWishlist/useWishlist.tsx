import { GameCardProps } from 'components/GameCard'
import { createContext, useContext } from 'react'
import { useGetWishlist } from 'services/wishlist'

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
  const { games, loading } = useGetWishlist()

  const hasItem = (slug: string) => games.some(item => item.slug === slug)
  const addItem = (slug: string) => slug
  const removeItem = (slug: string) => slug

  return (
    <WishlistContext.Provider
      value={{
        items: games,
        hasItem,
        addItem,
        removeItem,
        loading
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export const useWishlist = () => useContext(WishlistContext)
