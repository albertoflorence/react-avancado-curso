import { useCart, CartProvider, CartProviderProps } from './useCart'
import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'

describe('useCart()', () => {
  it('should return cart items', () => {
    setStorageItem('cartItems', ['1', '2', '3'])

    const wrapper = ({ children }: CartProviderProps) => <CartProvider>{children}</CartProvider>
    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toEqual(['1', '2', '3'])
  })
})
