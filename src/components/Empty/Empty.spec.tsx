import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Empty, { EmptyProps } from './Empty'

const init = (props?: Partial<EmptyProps>) => {
  renderWithTheme(<Empty title="any title" description="any description" {...props} />)
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByAltText(/a gamer in a couch playing videogame/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'any title' })).toBeInTheDocument()
    expect(screen.getByText('any description')).toBeInTheDocument()
  })

  it('should render with link to home', () => {
    init({ toHome: true })

    expect(screen.getByRole('link', { name: /go back to store/i })).toHaveAttribute('href', '/')
  })
})
