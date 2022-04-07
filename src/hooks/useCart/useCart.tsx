import { createContext, useContext, useEffect, useState } from 'react'
import { useGetGames } from 'services'
import { formatPrice, formattedPriceToNumber } from 'utils/helpers'
import { getStorageItem } from 'utils/localStorage'

interface CartItem {
  title: string
  image: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  total: string
  quantity: number
}

export const defaultValues: CartContextData = {
  items: [],
  total: '$0.00',
  quantity: 0
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

  const { data } = useGetGames({
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
      title: game.title
    })) || []

  const quantity = items.length

  return <CartContext.Provider value={{ total, items, quantity }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
