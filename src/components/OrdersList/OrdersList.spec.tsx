import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import OrdersList, { OrdersListProps } from './OrdersList'

const init = (props?: OrdersListProps) => {
  renderWithTheme(<OrdersList {...props} />)
}

const mockProps: OrdersListProps = {
  items: [
    {
      image: 'any img',
      price: 'any price',
      title: 'any title'
    },
    {
      image: 'any img',
      price: 'any price',
      title: 'any title 2'
    }
  ]
}

describe('<OrdersList />', () => {
  it('should render correctly', () => {
    init(mockProps)

    expect(screen.getByRole('heading', { name: 'My Orders' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'any title' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'any title 2' })).toBeInTheDocument()
  })

  it('should render Empty component if there are no items', () => {
    init()

    expect(screen.getByRole('heading', { name: 'You have no orders yet' })).toBeInTheDocument()
  })
})
