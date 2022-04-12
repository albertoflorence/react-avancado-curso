import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { useWishlist, WishlistProvider, WishlistProviderProps } from './useWishlist'
import { act, renderHook } from '@testing-library/react-hooks'

const init = (props: MockedResponse[]) => {
  const wrapper = ({ children }: WishlistProviderProps) => (
    <MockedProvider mocks={props}>
      <WishlistProvider>{children}</WishlistProvider>
    </MockedProvider>
  )

  return renderHook(() => useWishlist(), { wrapper })
}

describe('useWishlist()', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should return wishlist', () => {
    setStorageItem('wishlist', ['1', '2'])
    const { result } = init([])
    expect(result.current.items).toEqual(['1', '2'])
  })

  it('should return true when wishlist has the item ', () => {
    setStorageItem('wishlist', ['1', '2'])

    const { result } = init([])
    const sut = result.current.hasItem('1')
    expect(sut).toBe(true)
  })

  it('should return true/false if wishlist item exist', () => {
    setStorageItem('wishlist', ['1', '2'])
    const { result } = init([])
    expect(result.current.hasItem('1')).toBe(true)
    expect(result.current.hasItem('3')).toBe(false)
  })

  it('should add a item', () => {
    const { result } = init([])
    act(() => {
      result.current.addItem('1')
    })

    expect(getStorageItem('wishlist')).toEqual(['1'])
  })

  it('should remove a item', () => {
    setStorageItem('wishlist', ['1', '2', '3'])
    const { result } = init([])
    act(() => {
      result.current.removeItem('2')
    })

    expect(getStorageItem('wishlist')).toEqual(['1', '3'])
  })
})
