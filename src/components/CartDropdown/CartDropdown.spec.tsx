import { screen } from '@testing-library/react'
import mockCartList from 'components/CartList/mock'
import { renderWithTheme } from 'utils/tests'
import CartDropdown from './CartDropdown'

const init = () => {
  renderWithTheme(<CartDropdown {...mockProps} />)
}

const mockProps = {
  items: mockCartList,
  total: 'any total'
}

describe('<CartDropdown />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByRole('img', { name: 'Shopping Cart' })).toBeInTheDocument()
    expect(screen.getByText(mockProps.items.length)).toBeInTheDocument()
    expect(screen.getByText(mockProps.items[1].title)).toBeInTheDocument()
    expect(screen.getByText('any total')).toBeInTheDocument()
  })
})
