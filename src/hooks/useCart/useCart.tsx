import { createContext, useContext, useEffect, useState } from 'react'
import { useGetGames } from 'services'
import { formatPrice, formattedPriceToNumber } from 'utils/helpers'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

interface CartItem {
  title: string
  image: string
  price: string
  slug: string
}

export type CartContextData = {
  items: CartItem[]
  total: string
  quantity: number
  loading: boolean
  hasItem: (slug: string) => boolean
  addItem: (slug: string) => void
  removeItem: (slug: string) => void
  clear: () => void
}

export const defaultValues: CartContextData = {
  items: [],
  total: '$0.00',
  quantity: 0,
  hasItem: () => false,
  addItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  loading: true
}

export const CartContext = createContext<CartContextData>(defaultValues)

export interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem<string[]>('cartItems')
    if (data) {
      setCartItems(data)
    }
  }, [])

  useEffect(() => {
    setStorageItem('cartItems', cartItems)
  }, [cartItems])

  const { data, loading } = useGetGames({
    variables: {
      where: {
        slug: cartItems
      }
    }
  })

  const total = formatPrice(
    data?.reduce((total, { price }) => total + formattedPriceToNumber(price), 0) || 0
  )

  const items =
    data?.map(game => ({
      image: game.image,
      price: game.price,
      title: game.title,
      slug: game.slug
    })) || []

  const quantity = cartItems.length
  const hasItem = (slug: string) => cartItems.includes(slug)
  const addItem = (slug: string) => setCartItems(state => state.concat(slug))
  const removeItem = (slug: string) => setCartItems(state => state.filter(item => item !== slug))
  const clear = () => setCartItems([])

  return (
    <CartContext.Provider
      value={{ total, items, quantity, loading, hasItem, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
