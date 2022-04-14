import { WishlistContextData } from 'hooks/useWishlist'
import { fireEvent, render, screen, waitFor } from 'utils/tests'
import { push } from '../../../.jest/useRouter.mock'
import WishlistButton, { WishlistButtonProps } from './WishlistButton'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
useSession.mockImplementation(() => ({ status: 'authenticated' }))

const init = (props?: Partial<WishlistButtonProps>, options?: Partial<WishlistContextData>) => {
  return render(<WishlistButton id={'1'} {...props} />, {
    wishlistProviderProps: options
  })
}

const addButton = () => screen.getByRole('button', { name: 'Add to Wishlist' })
const removeButton = () => screen.getByRole('button', { name: 'Remove from Wishlist' })

describe('<WishlistButton />', () => {
  it('should render add wishlist button', () => {
    init()
    expect(addButton()).toBeInTheDocument()
  })

  it('should render remove wishlist button ', () => {
    init({}, { hasItem: () => true })

    expect(removeButton()).toBeInTheDocument()
  })

  it('should handle add item to wishlist', async () => {
    const addItem = jest.fn()
    init({ id: 'any id' }, { addItem })
    fireEvent.click(addButton())

    await waitFor(() => {
      expect(addItem).toHaveBeenCalledWith('any id')
    })
  })

  it('should handle remove item from wishlist', async () => {
    const removeItem = jest.fn()
    init({ id: 'any id' }, { hasItem: () => true, removeItem })

    fireEvent.click(removeButton())

    await waitFor(() => {
      expect(removeItem).toHaveBeenCalledWith('any id')
    })
  })

  it('should render button with text', () => {
    init({ hasText: true })

    expect(screen.getByText('Add to wishlist')).toBeInTheDocument()
  })

  it('should render button with remove text', () => {
    init({ hasText: true }, { hasItem: () => true })

    expect(screen.getByText('Remove from wishlist')).toBeInTheDocument()
  })

  it('should not render when session is loading', () => {
    useSession.mockImplementationOnce(() => ({ status: 'loading' }))
    const { container } = init()

    expect(container.firstChild).not.toBeInTheDocument()
  })

  it('should redirect to login when user is unauthenticated', async () => {
    useSession.mockImplementationOnce(() => ({ status: 'unauthenticated' }))
    init()
    fireEvent.click(addButton())
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/login')
    })
  })
})
