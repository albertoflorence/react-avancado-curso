import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

export interface CartContextData {
  items: string[]
}

export const defaultValues: CartContextData = {
  items: []
}

export const CartContext = createContext<CartContextData>(defaultValues)

export interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])
  useEffect(() => {
    const data = getStorageItem<string[]>('cartItems')
    console.log(data)
    if (data) {
      setCartItems(data)
    }
  }, [])
  return <CartContext.Provider value={{ items: cartItems }}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
