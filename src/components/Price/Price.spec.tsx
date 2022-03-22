import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Price, { PriceProps } from './Price'

const init = (props?: Partial<PriceProps>) => {
  renderWithTheme(<Price {...props}>R$200,00</Price>)
  return screen.getByText('R$200,00')
}

describe('<Price />', () => {
  it('should render correctly', () => {
    const sut = init()
    expect(sut).toBeInTheDocument()
  })

  it('should render with discount', () => {
    const sut = init({ discount: true })
    expect(sut).toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render with light weight', () => {
    const sut = init({ light: true })
    expect(sut).toHaveStyle({ fontWeight: theme.font.light })
  })
})
