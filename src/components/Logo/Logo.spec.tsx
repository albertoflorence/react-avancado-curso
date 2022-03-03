import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import 'jest-styled-components'
import Logo, { LogoProps } from './Logo'

const init = (props?: LogoProps) => {
  renderWithTheme(<Logo {...props} />)
  return screen.getByLabelText(/won games/i).parentElement
}

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black label', () => {
    const sut = init({ color: 'black' })
    expect(sut).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render a bigger logo', () => {
    const sut = init({ size: 'large' })
    expect(sut).toHaveStyle({
      width: '200px'
    })
  })

  it('should render a normal logo', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      width: '110px'
    })
  })

  it('should render a logo without text on mobile', () => {
    const sut = init({ hideOnMobile: true })
    expect(sut).toHaveStyleRule('width', '58px', {
      media: `(max-width: ${theme.breakpoints.medium})`
    })
  })
})
