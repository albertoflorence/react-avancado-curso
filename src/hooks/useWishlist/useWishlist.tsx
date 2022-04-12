import { createContext, useContext, useEffect, useState } from 'react'
import { useGetWishlist } from 'services/wishlist'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

export interface WishlistContextData {
  items: string[]
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
  const [wishlist, setWishlist] = useState<string[]>([])
  useEffect(() => {
    const data = getStorageItem<string[]>('wishlist')
    if (data) {
      setWishlist(data)
    }
  }, [])

  useEffect(() => {
    setStorageItem('wishlist', wishlist)
  }, [wishlist])

  const hasItem = (id: string) => wishlist.includes(id)
  const addItem = (id: string) => setWishlist(s => s.concat(id))
  const removeItem = (id: string) => setWishlist(s => s.filter(item => item !== id))

  const { loading } = useGetWishlist({})

  return (
    <WishlistContext.Provider
      value={{
        items: wishlist,
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
