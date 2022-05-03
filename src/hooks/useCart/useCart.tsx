import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useGetGames } from 'services'
import { formatPrice, formattedPriceToNumber } from 'utils/helpers'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

interface CartItem {
  id: string
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

export const cartDefaultValues: CartContextData = {
  items: [],
  total: '$0.00',
  quantity: 0,
  hasItem: () => false,
  addItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  loading: false
}

export const CartContext = createContext<CartContextData>(cartDefaultValues)

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
    skip: cartItems.length < 1,
    variables: {
      where: {
        slug: cartItems
      }
    }
  })

  const total = formatPrice(
    data?.reduce(
      (total, { price, discount }) => total + formattedPriceToNumber(discount || price),
      0
    ) || 0
  )

  const items = useMemo(
    () =>
      data?.map(game => ({
        id: game.id,
        image: game.image,
        price: game.discount || game.price,
        title: game.title,
        slug: game.slug
      })) || [],
    [data]
  )

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
