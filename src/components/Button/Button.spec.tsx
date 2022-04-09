import { render, screen, theme } from 'utils/tests'
import Button, { ButtonProps } from './Button'
import Icon from 'components/Icon'

const makeIcon = (id: string) => <Icon label="AddShoppingCart" data-testid={id} />

const init = (props?: ButtonProps) => {
  render(<Button {...props}>Won Games</Button>)
}

const getButton = (role = 'button') => screen.getByRole(role, { name: /won games/i })

describe('<Button />', () => {
  it('should render medium size by default', () => {
    init()
    expect(getButton()).toHaveStyle({
      fontSize: theme.font.sizes.medium,
      padding: theme.spacing(1, 4)
    })
  })

  it('should render small size', () => {
    init({ size: 'small' })
    expect(getButton()).toHaveStyle({
      fontSize: theme.font.sizes.small,
      padding: theme.spacing(1)
    })
  })

  it('should render large size', () => {
    init({ size: 'large' })
    expect(getButton()).toHaveStyle({
      fontSize: theme.font.sizes.large,
      padding: theme.spacing(1, 6)
    })
  })

  it('should render fullWidth', () => {
    init({ fullWidth: true })
    expect(getButton()).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon at start', () => {
    init({ startIcon: makeIcon('startIcon') })
    expect(getButton()).toBeInTheDocument()
    expect(screen.getByTestId('startIcon')).toBeInTheDocument()
  })

  it('should render an icon in the end', () => {
    init({ endIcon: makeIcon('endIcon') })
    expect(getButton()).toBeInTheDocument()
    expect(screen.getByTestId('endIcon')).toBeInTheDocument()
  })

  it('should render as a link', () => {
    init({ as: 'a', href: '/link' })
    expect(getButton('link')).toHaveAttribute('href', '/link')
  })

  it('should render a text button', () => {
    init({ text: true })
    expect(getButton()).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    })
  })

  it('should render disabled', () => {
    init({ disabled: true })
    expect(getButton()).toHaveStyle({
      filter: 'saturate(20%)',
      pointerEvents: 'none'
    })
  })

  it('should render loading', () => {
    init({ loading: true })

    expect(screen.getByRole('button')).toHaveStyle({
      filter: 'saturate(20%)',
      pointerEvents: 'none'
    })
    expect(screen.getByLabelText('loading')).toBeInTheDocument()
  })
})
