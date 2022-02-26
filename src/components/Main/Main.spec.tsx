import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument()
  })
})
