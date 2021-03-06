import { render, screen } from 'utils/tests'
import GameInfo, { GameInfoProps } from './GameInfo'

const init = (props: GameInfoProps) => {
  render(<GameInfo {...props} />)
}

const mockProps = {
  id: '1',
  title: 'title',
  description: 'description',
  price: 'R$200,00',
  slug: 'slug'
}

describe('<GameInfo />', () => {
  it('should render correctly', () => {
    init({ ...mockProps })
    expect(screen.getByRole('heading', { name: 'title' })).toBeInTheDocument()
    expect(screen.getByText('description')).toBeInTheDocument()
    expect(screen.getByText('R$200,00')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /wishlist/i })).toBeInTheDocument()
  })

  it('should render with discount', () => {
    init({ ...mockProps, discount: 'R$100,00' })
    expect(screen.getByText('R$200,00')).toBeInTheDocument()
    expect(screen.getByText('R$100,00')).toBeInTheDocument()
  })
})
