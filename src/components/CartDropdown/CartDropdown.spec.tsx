import { render, screen } from 'utils/tests'

import CartDropdown from './CartDropdown'

const init = () => {
  render(<CartDropdown />)
}

describe('<CartDropdown />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByRole('img', { name: 'Open Shopping Cart' })).toBeInTheDocument()
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
  })
})
