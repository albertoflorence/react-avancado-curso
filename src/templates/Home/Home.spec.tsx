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

jest.mock('components/Menu/Menu', () => makeMock('Mock Menu'))
jest.mock('components/Footer/Footer', () => makeMock('Mock Footer'))
jest.mock('components/Showcase/Showcase', () => makeMock('Mock Showcase'))
jest.mock('components/BannerSlider/BannerSlider', () => makeMock('Mock BannerSlider'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: () => <div data-testid={testid}></div>
})

describe('<Home />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
