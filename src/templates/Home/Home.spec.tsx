import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Home from './Home'
import gameCards from 'components/GameCardSlider/mock'
import banners from 'components/BannerSlider/mock'
import highlight from 'components/Highlight/mock'

const props = {
  banners,
  newGames: gameCards,
  mostPopular: { highlight, gameCards },
  upComing: { highlight, gameCards },
  freeGames: { highlight, gameCards }
}

const init = () => {
  renderWithTheme(<Home {...props} />)
}

jest.mock('templates/Base/Base', () => makeMock('Mock Base'))
jest.mock('components/Showcase/Showcase', () => makeMock('Mock Showcase'))
jest.mock('components/BannerSlider/BannerSlider', () => makeMock('Mock BannerSlider'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Home />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
