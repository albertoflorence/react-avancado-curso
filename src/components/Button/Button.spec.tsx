import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Button, { ButtonProps } from './Button'
import { Icon } from 'components'

const makeIcon = (id: string) => <Icon label="AddShoppingCart" data-testid={id} />

const init = (props?: ButtonProps, role = 'button') => {
  renderWithTheme(<Button {...props}>Won Games</Button>)
  return screen.getByRole(role, { name: /won games/i })
}

describe('<Button />', () => {
  it('should render the correct snapshot', () => {
    const { container } = renderWithTheme(<Button>Won Games</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render medium size by default', () => {
    const sut = init()
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.medium,
      padding: theme.spacing(1, 4)
    })
  })

  it('should render small size', () => {
    const sut = init({ size: 'small' })
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.small,
      padding: theme.spacing(1)
    })
  })

  it('should render large size', () => {
    const sut = init({ size: 'large' })
    expect(sut).toHaveStyle({
      fontSize: theme.font.sizes.large,
      padding: theme.spacing(1, 6)
    })
  })

  it('should render fullWidth', () => {
    const sut = init({ fullWidth: true })
    expect(sut).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon at start', () => {
    const sut = init({ startIcon: makeIcon('startIcon') })
    expect(sut).toBeInTheDocument()
    expect(screen.getByTestId('startIcon')).toBeInTheDocument()
  })

  it('should render an icon in the end', () => {
    const sut = init({ endIcon: makeIcon('endIcon') })
    expect(sut).toBeInTheDocument()
    expect(screen.getByTestId('endIcon')).toBeInTheDocument()
  })

  it('should render as a link', () => {
    const sut = init({ as: 'a', href: '/link' }, 'link')
    expect(sut).toHaveAttribute('href', '/link')
  })

  it('should render a text button', () => {
    const sut = init({ text: true })
    expect(sut).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    })
  })
})
