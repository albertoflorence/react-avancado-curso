import { useCart, CartProvider, CartProviderProps } from './useCart'
import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { gamesMock } from './mock'

const init = (props: MockedResponse[]) => {
  const wrapper = ({ children }: CartProviderProps) => (
    <MockedProvider mocks={props}>
      <CartProvider>{children}</CartProvider>
    </MockedProvider>
  )

  return renderHook(() => useCart(), { wrapper })
}

describe('useCart()', () => {
  it('should return cart items default values', async () => {
    const { result, waitForNextUpdate } = init([])
    await waitForNextUpdate()

    expect(result.current.items).toEqual([])
    expect(result.current.total).toBe('$0.00')
    expect(result.current.quantity).toBe(0)
  })

  it('should return cart items', async () => {
    setStorageItem('cartItems', ['any-slug', 'another-slug'])
    const { result, waitForNextUpdate } = init([gamesMock])
    await waitForNextUpdate()

    expect(result.current.items).toEqual([
      {
        title: 'any game',
        image: 'http://localhost:1337/any_url',
        price: '$100.00'
      },
      {
        title: 'another game',
        image: 'http://localhost:1337/any_url',
        price: '$200.00'
      }
    ])
    expect(result.current.total).toBe('$300.00')
    expect(result.current.quantity).toBe(2)
  })
})
