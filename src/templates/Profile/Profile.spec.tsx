import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Profile from './Profile'

const init = () => {
  renderWithTheme(<Profile>children</Profile>)
}

describe('<Profile />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByRole('heading', { name: 'My Profile' })).toBeInTheDocument()
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
