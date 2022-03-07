import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Ribbon, { RibbonProps } from './Ribbon'

const init = (props?: Partial<RibbonProps>) => {
  renderWithTheme(<Ribbon {...props}>Won Games</Ribbon>)
  return screen.getByText(/won games/i)
}

describe('<Ribbon />', () => {
  it('should render the Ribbon', () => {
    const sut = init()
    expect(sut).toBeInTheDocument()
  })

  it('should render with primary color as default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      backgroundColor: theme.colors.primary
    })
  })

  it('should render with secondary color', () => {
    const sut = init({ color: 'secondary' })
    expect(sut).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render with normal size as default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.small,
      height: '36px'
    })
  })

  it('should render with small size', () => {
    const sut = init({ size: 'small' })
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.xsmall,
      height: '26px'
    })
  })
})
