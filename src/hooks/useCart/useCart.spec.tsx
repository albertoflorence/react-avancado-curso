import { useCart, CartProvider, CartProviderProps } from './useCart'
import { act, renderHook } from '@testing-library/react-hooks'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { gameDiscountMock, gamesMock } from './mock'

const init = (props: MockedResponse[]) => {
  const wrapper = ({ children }: CartProviderProps) => (
    <MockedProvider mocks={props}>
      <CartProvider>{children}</CartProvider>
    </MockedProvider>
  )

  return renderHook(() => useCart(), { wrapper })
}

describe('useCart()', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return cart items default values', async () => {
    const { result } = init([])

    act(() => {
      result.current.addItem('')
      result.current.removeItem('')
      result.current.clear()
    })

    expect(result.current.items).toEqual([])
    expect(result.current.total).toBe('$0.00')
    expect(result.current.quantity).toBe(0)
    expect(result.current.loading).toBe(false)
    expect(result.current.hasItem('')).toBe(false)
  })

  it('should return cart items', async () => {
    setStorageItem('cartItems', ['any-slug', 'another-slug'])
    const { result, waitForNextUpdate } = init([gamesMock])

    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.items).toEqual([
      {
        id: '1',
        slug: 'any-slug',
        title: 'any game',
        image: 'http://localhost:1337/any_url',
        price: '$100.00'
      },
      {
        id: '2',
        slug: 'another-slug',
        title: 'another game',
        image: 'http://localhost:1337/any_url',
        price: '$200.00'
      }
    ])
    expect(result.current.total).toBe('$300.00')
    expect(result.current.quantity).toBe(2)
  })

  it('should return with discount price', async () => {
    setStorageItem('cartItems', ['any-slug'])
    const { result, waitForNextUpdate } = init([gameDiscountMock])

    await waitForNextUpdate()

    expect(result.current.items).toEqual([
      {
        id: '3',
        slug: 'any-slug',
        title: 'any game',
        image: 'http://localhost:1337/any_url',
        price: '$80.00'
      }
    ])
    expect(result.current.total).toBe('$80.00')
  })

  it('should return true/false if cart item exist', () => {
    setStorageItem('cartItems', ['any-slug'])
    const { result } = init([])

    expect(result.current.hasItem('any-slug')).toBe(true)
    expect(result.current.hasItem('another-slug')).toBe(false)
  })

  it('should add item in the cart', async () => {
    const { result } = init([])

    act(() => {
      result.current.addItem('any-slug')
    })

    expect(result.current.quantity).toBe(1)
    expect(getStorageItem('cartItems')).toEqual(['any-slug'])
  })

  it('should remove item from the cart', () => {
    setStorageItem('cartItems', ['any-slug'])
    const { result } = init([])

    act(() => {
      result.current.removeItem('any-slug')
    })

    expect(result.current.quantity).toBe(0)
    expect(getStorageItem('cartItems')).toEqual([])
  })

  it('should clear the cart', () => {
    setStorageItem('cartItems', ['any-slug', 'another-slug'])
    const { result } = init([])

    act(() => {
      result.current.clear()
    })

    expect(result.current.quantity).toBe(0)
    expect(getStorageItem('cartItems')).toEqual([])
  })
})
