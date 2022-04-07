import { render, screen } from 'utils/tests'

import mockCartList from 'components/CartList/mock'
import CartDropdown from './CartDropdown'

const init = () => {
  render(<CartDropdown {...mockProps} />)
}

const mockProps = {
  items: mockCartList,
  total: 'any total'
}

describe('<CartDropdown />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByRole('img', { name: 'Open Shopping Cart' })).toBeInTheDocument()
    expect(screen.getByText(mockProps.items[1].title)).toBeInTheDocument()
    expect(screen.getByText('any total')).toBeInTheDocument()
  })
})
