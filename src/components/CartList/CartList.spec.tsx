import { CartContextData } from 'hooks'
import { render, screen } from 'utils/tests'
import CartList, { CartListProps } from './CartList'
import mockItems from './mock'

const init = (props?: Partial<CartListProps>, context?: Partial<CartContextData>) => {
  render(<CartList {...props} />, {
    cartProviderProps: {
      items: mockItems,
      total: 'any total',
      ...(context && context)
    }
  })
}

describe('<CartList />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByText(mockItems[0].title)).toBeInTheDocument()
    expect(screen.getByText('any total')).toBeInTheDocument()
  })
  it('should render with button', () => {
    init({ hasButton: true })

    expect(screen.getByRole('link', { name: /buy it now/i })).toHaveAttribute('href', '/cart')
  })

  it('should render Empty if there are no games', () => {
    init({}, { items: [] })

    expect(screen.getByRole('heading', { name: /your cart is empty/i })).toBeInTheDocument()
  })

  it('should render loading', () => {
    init({}, { loading: true })
    expect(screen.getByLabelText('loading')).toBeInTheDocument()
  })
})
