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

describe('<Home />', () => {
  it('should render menu and footer', () => {
    init()
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contact us/i }))
  })

  it('should render the sections', () => {
    init()
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /most popular/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /up coming/i })).toBeInTheDocument()
  })
})
