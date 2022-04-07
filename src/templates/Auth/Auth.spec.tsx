import { render, screen } from 'utils/tests'
import Auth, { AuthProps } from './Auth'

const init = (props: AuthProps) => {
  render(<Auth {...props} />)
}

describe('<Auth />', () => {
  it('should render correctly', () => {
    init({ title: 'any title', children: 'any children' })

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
    expect(screen.getByRole('img', { name: 'background auth page' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: 'any title' })).toBeInTheDocument()
    expect(screen.getByText('any children')).toBeInTheDocument()
  })
})
