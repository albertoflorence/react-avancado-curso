import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import CartList from './CartList'
import mockItems from './mock'

const init = () => {
  renderWithTheme(<CartList items={mockItems} total="any total" />)
}

describe('<CartList />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByText(mockItems[0].title)).toBeInTheDocument()
    expect(screen.getByText('any total')).toBeInTheDocument()
  })
})
