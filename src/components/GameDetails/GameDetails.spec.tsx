import { render, screen } from 'utils/tests'
import GameDetails, { GameDetailsProps } from './GameDetails'

const init = (props?: Partial<GameDetailsProps>) => {
  render(<GameDetails {...mockProps} {...props} />)
}

const mockProps: GameDetailsProps = {
  developer: 'Gearbox Software',
  publisher: '2k',
  platforms: ['windows', 'mac', 'linux'],
  releaseDate: '2020-11-21T23:00:00',
  rating: 'BR18',
  genres: ['Action', 'Adventure']
}

const getByRole = (role: string) => (name: string) =>
  screen.getByRole(role, { name: new RegExp(name, 'i') })

const getByHeading = getByRole('heading')
const getByImg = getByRole('img')
const getByText = (name: string) => screen.getByText(new RegExp(name, 'i'))

describe('<GameDetails />', () => {
  it('should render the headings', () => {
    init()
    const headings = ['developer', 'publisher', 'platforms', 'release date', 'rating', 'genres']
    for (const item of headings) {
      expect(getByHeading(item)).toBeInTheDocument()
    }
  })

  it('should render the platforms', () => {
    init()
    expect(getByImg('windows')).toBeInTheDocument()
    expect(getByImg('linux')).toBeInTheDocument()
    expect(getByImg('mac')).toBeInTheDocument()
  })

  it('should render the genres', () => {
    init()
    expect(getByText('action / adventure')).toBeInTheDocument()
  })

  it('should render the rating', () => {
    init()
    expect(getByText('18+')).toBeInTheDocument()
  })

  it('should render the FREE rating', () => {
    init({ rating: 'BR0' })
    expect(getByText('FREE')).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    init()
    expect(getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    init()
    expect(getByText('2k')).toBeInTheDocument()
  })
})
