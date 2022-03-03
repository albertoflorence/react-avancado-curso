import { screen } from '@testing-library/react'
import { renderWithTheme, theme } from 'utils/tests'
import Logo from './Logo'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render a black label', () => {
    renderWithTheme(<Logo color={'black'} />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    })
  })
})
