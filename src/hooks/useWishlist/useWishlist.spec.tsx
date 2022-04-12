import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { useWishlist, WishlistProvider, WishlistProviderProps } from './useWishlist'
import { renderHook } from '@testing-library/react-hooks'
import { wishlistMock } from './mock'

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

const mockGame = () => [
  {
    id: '1',
    slug: 'any-slug',
    title: 'any game',
    image: 'http://localhost:1337/any_url',
    price: '$100.00',
    subtitle: 'any developer',
    favorite: false
  },
  {
    id: '2',
    slug: 'another-slug',
    title: 'another game',
    image: 'http://localhost:1337/any_url',
    price: '$200.00',
    subtitle: 'another developer',
    favorite: false
  }
]

describe('useWishlist()', () => {
  it('should return wishlist', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock])
    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)
    expect(result.current.items).toEqual(mockGame())
  })

  it('should return true/false if wishlist item exist', async () => {
    const { result, waitForNextUpdate } = init([wishlistMock])

    await waitForNextUpdate()
    expect(result.current.hasItem('another-slug')).toBe(true)
    expect(result.current.hasItem('invalid-slug')).toBe(false)
  })
})
