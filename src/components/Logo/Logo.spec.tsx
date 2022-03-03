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

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size={'large'} />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '200px'
    })
  })

  it('should render a normal logo', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '110px'
    })
  })
})
