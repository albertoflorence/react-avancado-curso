import { render, screen } from 'utils/tests'
import Game, { GameTemplateProps } from './Game'
import gameCardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gameInfoMock from 'components/GameInfo/mock'
import galleryMock from 'components/Gallery/mock'

const props: GameTemplateProps = {
  cover: 'any cover',
  description: '<h1>any html</h1>',
  gameDetails: gameDetailsMock,
  gameInfo: gameInfoMock,
  recommended: { gameCards: gameCardsMock },
  upComing: {
    gameCards: gameCardsMock,
    highlight: highlightMock
  },
  gallery: galleryMock
}

jest.mock('templates/Base/Base', () => makeMock('Mock Base'))
jest.mock('components/Gallery/Gallery', () => makeMock('Mock Gallery'))
jest.mock('components/GameDetails/GameDetails', () => makeMock('Mock GameDetails'))
jest.mock('components/GameInfo/GameInfo', () => makeMock('Mock GameInfo'))
jest.mock('components/Showcase/Showcase', () => makeMock('Mock Showcase'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Game />', () => {
  it('should render correctly', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'any cover')
    expect(screen.getByRole('heading', { name: 'any html' })).toBeInTheDocument()
  })

  it('should not render the gallery if there is no images', () => {
    render(<Game {...props} gallery={undefined} />)
    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery if is on mobile', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({ display: 'none' })
    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })
})
