import { render, screen, theme } from 'utils/tests'
import Icon, { IconProps } from './Icon'

const init = (props?: Partial<IconProps>) => {
  render(<Icon label="Add" title="icon" {...props} />)
}

const getIcon = () => screen.getByRole('img', { name: 'icon' })

describe('<Icon />', () => {
  it('should render correctly', () => {
    init()
    expect(getIcon()).toBeInTheDocument()
  })

  it('should render with color', () => {
    init({ color: 'primary' })

    expect(getIcon().parentNode).toHaveStyle({
      color: theme.colors.primary
    })
  })

  it('should render with badge', () => {
    init({ badge: 10 })

    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('should not render with 0 badge', () => {
    init({ badge: 0 })
    expect(screen.queryByLabelText('Icon Badge')).not.toBeInTheDocument()
  })
})
