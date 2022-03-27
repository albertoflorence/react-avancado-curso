import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import UserDropdown from './UserDropdown'

const init = () => {
  renderWithTheme(<UserDropdown username="any user" />)
}

const getByRole = (role: string) => (name: string) =>
  screen.getByRole(role, { name: new RegExp(name, 'i'), hidden: true })

const getLink = getByRole('link')
const getIcon = getByRole('img')

describe('<UserDropdown />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByText('any user')).toBeInTheDocument()
    expect(getIcon('account dropdown')).toBeInTheDocument()

    expect(getLink('my account')).toHaveAttribute('href', '/profile/me')
    expect(getLink('wishlist')).toHaveAttribute('href', '/wishlist')
    expect(getLink('sign out')).toHaveAttribute('href', '/logout')

    expect(getIcon('my account')).toBeInTheDocument()
    expect(getIcon('wishlist')).toBeInTheDocument()
    expect(getIcon('sign out')).toBeInTheDocument()
  })
})
