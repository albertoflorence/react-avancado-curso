import { ThemeProvider } from 'styled-components'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import { CartContext, CartContextData, cartDefaultValues } from 'hooks/useCart'
import { WishlistContext, WishlistContextData, wishlistDefaultValues } from 'hooks/useWishlist'

type Options = {
  cartProviderProps?: Partial<CartContextData>
  wishlistProviderProps?: Partial<WishlistContextData>
} & RenderOptions

export const customRender = (
  ui: React.ReactNode,
  { cartProviderProps, wishlistProviderProps, ...renderOptions }: Options = {}
): RenderResult => {
  const cartProps = Object.assign({}, cartDefaultValues, cartProviderProps)
  const wishlistProps = Object.assign({}, wishlistDefaultValues, wishlistProviderProps)
  return render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProps}>
        <WishlistContext.Provider value={wishlistProps}>{ui}</WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )
}

export * from '@testing-library/react'
export { theme }
export { customRender as render }
