import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Wishlist, { WishlistTemplateProps } from './Wishlist'

import mockGameCards from 'components/GameCardSlider/mock'
import mockHighlight from 'components/Highlight/mock'

const props: WishlistTemplateProps = {
  games: mockGameCards,
  recommended: {
    gameCards: mockGameCards,
    highlight: mockHighlight
  }
}

jest.mock('templates/Base/Base', () => makeMock('Mock Base'))
jest.mock('components/GameCard/GameCard', () => makeMock('Mock GameCard'))
jest.mock('components/Showcase/Showcase', () => makeMock('Mock Showcase'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Wishlist />', () => {
  it('should render', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(mockGameCards.length)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wishlist' })).toBeInTheDocument()
  })

  it('should not render GameCard if there is no games ', () => {
    renderWithTheme(<Wishlist {...props} games={undefined} />)

    expect(screen.queryByTestId('Mock GameCard')).not.toBeInTheDocument()
    expect(screen.getByText('Add here games that you wish to buy')).toBeInTheDocument()
  })
})