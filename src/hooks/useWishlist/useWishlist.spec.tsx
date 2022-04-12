import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { useWishlist, WishlistProvider, WishlistProviderProps } from './useWishlist'
import { act, renderHook } from '@testing-library/react-hooks'
import { mockGames, removeWishlistMock, updateWishlistMock, wishlistMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
useSession.mockImplementation(() => ({
  jwt: '123'
}))

const init = (props: MockedResponse[]) => {
  const wrapper = ({ children }: WishlistProviderProps) => (
    <MockedProvider mocks={props}>
      <WishlistProvider>{children}</WishlistProvider>
    </MockedProvider>
  )

  return renderHook(() => useWishlist(), { wrapper })
}

describe('useWishlist()', () => {
  it('should return wishlist items', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock])

    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)

    expect(result.current.items).toEqual(mockGames().slice(0, 2))
  })

  it('should return true/false if wishlist item exist', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock])

    await waitForNextUpdate()
    expect(result.current.hasItem('1')).toBe(true)
    expect(result.current.hasItem('3')).toBe(false)
  })

  it('should update the wishlist', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock, updateWishlistMock])
    await waitForNextUpdate()

    act(() => {
      result.current.addItem('3')
    })

    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)

    expect(result.current.items).toEqual(mockGames())
  })

  it('should remove from the wishlist', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock, removeWishlistMock])
    await waitForNextUpdate()

    act(() => {
      result.current.removeItem('1')
    })
    await waitForNextUpdate()

    expect(result.current.items).toEqual(mockGames().slice(1, 2))
  })
})
