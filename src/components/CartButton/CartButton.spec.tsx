import { CartContextData } from 'hooks'
import { fireEvent, render, screen } from 'utils/tests'
import CartButton from './CartButton'

const init = (cartProviderProps?: Partial<CartContextData>) => {
  return render(<CartButton slug={'any-slug'} />, { cartProviderProps })
}

const addButton = () => screen.getByRole('button', { name: 'Add Shopping Cart' })
const removeButton = () => screen.getByRole('button', { name: 'Remove Shopping Cart' })

describe('<CartButton />', () => {
  it('should render with add shopping cart', () => {
    init()
    expect(addButton()).toBeInTheDocument()
  })

  it('should render with remove shopping cart', () => {
    init({ hasItem: () => true })
    expect(removeButton()).toBeInTheDocument()
  })

  it('should add an item', () => {
    const addItem = jest.fn()
    init({ addItem })
    fireEvent.click(addButton())
    expect(addItem).toHaveBeenCalledWith('any-slug')
  })

  it('should remove an item', () => {
    const removeItem = jest.fn()
    init({ removeItem, hasItem: () => true })
    fireEvent.click(removeButton())
    expect(removeItem).toHaveBeenCalledWith('any-slug')
  })
})
