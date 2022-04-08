import { CartContextData } from 'hooks'
import { fireEvent, render, screen, theme } from 'utils/tests'
import CartButton, { CartButtonProps } from './CartButton'

const init = (props?: Partial<CartButtonProps>, cartProviderProps?: Partial<CartContextData>) => {
  return render(<CartButton slug={'any-slug'} {...props} />, { cartProviderProps })
}

const addButton = () => screen.getByRole('button', { name: 'Add Shopping Cart' })
const removeButton = () => screen.getByRole('button', { name: 'Remove Shopping Cart' })
const button = () => screen.getByRole('button')

describe('<CartButton />', () => {
  it('should render with add shopping cart', () => {
    init()
    expect(addButton()).toBeInTheDocument()
  })

  it('should render with remove shopping cart', () => {
    init({}, { hasItem: () => true })
    expect(removeButton()).toBeInTheDocument()
  })

  it('should add an item', () => {
    const addItem = jest.fn()
    init({}, { addItem })
    fireEvent.click(button())
    expect(addItem).toHaveBeenCalledWith('any-slug')
  })

  it('should remove an item', () => {
    const removeItem = jest.fn()
    init({}, { removeItem, hasItem: () => true })
    fireEvent.click(button())
    expect(removeItem).toHaveBeenCalledWith('any-slug')
  })

  it('should render with small size as default', () => {
    init()
    expect(button()).toHaveStyle({
      fontSize: theme.font.sizes.small
    })
  })

  it('should render with large size ', () => {
    init({ size: 'large' })
    expect(button()).toHaveStyle({
      fontSize: theme.font.sizes.large
    })
  })

  it('should render with add text ', () => {
    init({ size: 'large', hasText: true })
    expect(screen.getByText('Add to cart')).toBeInTheDocument()
  })

  it('should render with remove text ', () => {
    init({ size: 'large', hasText: true }, { hasItem: () => true })
    expect(screen.getByText('Remove from cart')).toBeInTheDocument()
  })
})
