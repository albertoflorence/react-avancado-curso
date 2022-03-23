import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import ProfileMenu, { ProfileMenuProps } from './ProfileMenu'

const init = (props?: ProfileMenuProps) => {
  renderWithTheme(<ProfileMenu {...props} />)
}

const getLink = (name: string) => screen.getByRole('link', { name: new RegExp(name, 'i') })
const getIcon = (name: string) => screen.getByRole('img', { name: new RegExp(name, 'i') })

describe('<ProfileMenu />', () => {
  it('should render correctly', () => {
    init()
    expect(getLink('my profile')).toHaveAttribute('href', '/profile/me')
    expect(getLink('my cards')).toHaveAttribute('href', '/profile/cards')
    expect(getLink('my orders')).toHaveAttribute('href', '/profile/orders')
    expect(getLink('sign out')).toHaveAttribute('href', '/logout')

    expect(getIcon('my profile')).toBeInTheDocument()
    expect(getIcon('my cards')).toBeInTheDocument()
    expect(getIcon('my orders')).toBeInTheDocument()
    expect(getIcon('sign out')).toBeInTheDocument()
  })

  it('should render the menu with an active item defined', () => {
    init({ activeLink: '/profile/cards' })
    expect(getLink('my cards')).toHaveStyle({
      color: theme.colors.white,
      background: theme.colors.primary
    })
  })
})
