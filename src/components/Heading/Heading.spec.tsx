import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'

import Heading, { HeadingProps } from './Heading'

const init = (props?: Partial<HeadingProps>) => {
  renderWithTheme(<Heading {...props}>Won Games</Heading>)
  return screen.getByRole('heading', { name: /won games/i })
}

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black heading', () => {
    const sut = init({ color: 'black' })
    expect(sut).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render with a left line', () => {
    const sut = init({ line: 'left' })
    expect(sut).toHaveStyle({
      borderLeft: `5px solid ${theme.colors.primary}`
    })
  })

  it('should render with a bottom line', () => {
    const sut = init({ line: 'bottom' })
    expect(sut).toHaveStyleRule('border-bottom', `5px solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render with a secondary line color', () => {
    const sut = init({ line: 'left', lineColor: 'secondary' })
    expect(sut).toHaveStyle({
      borderLeft: `5px solid ${theme.colors.secondary}`
    })
  })
})
