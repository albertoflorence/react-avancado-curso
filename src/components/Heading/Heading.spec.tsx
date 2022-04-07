import { render, screen, theme } from 'utils/tests'
import Heading, { HeadingProps } from './Heading'

const init = (props?: Partial<HeadingProps>) => {
  render(<Heading {...props}>Won Games</Heading>)
  return screen.getByRole('heading', { name: /won games/i })
}

describe('<Heading />', () => {
  it('should render with the default values', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      color: theme.colors.white,
      fontSize: theme.font.sizes.xlarge
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
    expect(sut).toHaveStyleRule('border-bottom', `4px solid ${theme.colors.primary}`, {
      modifier: '::after'
    })
  })

  it('should render with a secondary line color', () => {
    const sut = init({ line: 'left', lineColor: 'secondary' })
    expect(sut).toHaveStyle({
      borderLeft: `5px solid ${theme.colors.secondary}`
    })
  })

  it('should render a heading with a small size', () => {
    const sut = init({ size: 'small' })
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.medium
    })
  })

  it('should render a heading with a huge size', () => {
    const sut = init({ size: 'huge' })
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.huge
    })
  })

  it('should render with uppercase text', () => {
    const sut = init({ textTransform: 'uppercase' })
    expect(sut).toHaveStyle({
      textTransform: 'uppercase'
    })
  })

  it('should render with lowercase text', () => {
    const sut = init({ textTransform: 'lowercase' })
    expect(sut).toHaveStyle({
      textTransform: 'lowercase'
    })
  })

  it('should render with capitalize text', () => {
    const sut = init({ textTransform: 'capitalize' })
    expect(sut).toHaveStyle({
      textTransform: 'capitalize'
    })
  })
})
