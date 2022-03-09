import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import GameCard, { GameCardProps } from './GameCard'

const init = (props: GameCardProps) => {
  renderWithTheme(<GameCard {...props} />)
  return (name: string, role: string) => screen.getByRole(role, { name: new RegExp(name, 'i') })
}

const mockGameCardProps = () => ({
  image: 'https://i.ibb.co/zPFXfK4/image.png',
  title: 'Population Zero',
  subtitle: 'Rockstar Games',
  price: 'R$215,00',
  favorite: false
})

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const props = mockGameCardProps()
    const makeElement = init(props)

    expect(makeElement(props.title, 'img')).toHaveAttribute('src', props.image)
    expect(makeElement(props.title, 'heading')).toBeInTheDocument()
    expect(makeElement(props.subtitle, 'heading')).toBeInTheDocument()
    expect(screen.getByText(props.price)).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render with discount', () => {
    const props = { ...mockGameCardProps(), discount: 'R$200,00' }
    init(props)
    expect(screen.getByText(props.discount)).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(screen.getByText(props.price)).toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render a filled Favorite icon', () => {
    const props = { ...mockGameCardProps(), favorite: true }
    init(props)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render with ribbon', () => {
    const props = { ...mockGameCardProps(), favorite: true }
    init(props)
    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })
})
