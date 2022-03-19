import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Price, { PriceProps } from './Price'

const init = (props?: Partial<PriceProps>) => {
  renderWithTheme(<Price {...props}>R$200,00</Price>)
}

describe('<Price />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByText('R$200,00')).toBeInTheDocument()
  })

  it('should render with discount', () => {
    init({ discount: true })
    expect(screen.getByText('R$200,00')).toHaveStyle({ textDecoration: 'line-through' })
  })
})
