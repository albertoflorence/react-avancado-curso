import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import CartList, { CartListProps } from './CartList'
import mockItems from './mock'

const init = (props?: Partial<CartListProps>) => {
  renderWithTheme(<CartList items={mockItems} total="any total" {...props} />)
}

describe('<CartList />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByText(mockItems[0].title)).toBeInTheDocument()
    expect(screen.getByText('any total')).toBeInTheDocument()
  })
  it('should render with button', () => {
    init({ hasButton: true })

    expect(screen.getByRole('link', { name: /buy it now/i })).toHaveAttribute('href', '/#')
  })
})
