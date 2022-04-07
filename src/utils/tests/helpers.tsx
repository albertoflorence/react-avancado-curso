import { ThemeProvider } from 'styled-components'
import { render, RenderOptions, RenderResult } from '@testing-library/react'

import theme from 'styles/theme'
import { CartContext, CartContextData, defaultValues } from 'hooks'

type Options = {
  cartProviderProps?: Partial<CartContextData>
} & RenderOptions

export const customRender = (
  ui: React.ReactNode,
  { cartProviderProps = defaultValues, ...renderOptions }: Options = {}
): RenderResult => {
  const cartProps = Object.assign({}, defaultValues, cartProviderProps)
  return render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProps}>{ui}</CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )
}

export * from '@testing-library/react'
export { theme }
export { customRender as render }
