import { screen } from '@testing-library/react'
import { FilterProps } from 'components/ExploreSidebar'
import filtersMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import { renderWithTheme } from 'utils/tests'
import Games, { GamesTemplateProps } from './Games'

const init = (props?: GamesTemplateProps) => {
  renderWithTheme(<Games {...mockProps} {...props} />)
}

const mockProps: GamesTemplateProps = {
  filters: filtersMock as FilterProps[],
  games: gamesMock
}

jest.mock('templates/Base', () => makeMock('Mock Base'))
jest.mock('components/GameCard', () => makeMock('Mock GameCard'))
jest.mock('components/ExploreSidebar', () => makeMock('Mock ExploreSidebar'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Games />', () => {
  it('should render', () => {
    init()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(mockProps.games?.length || 0)
    expect(screen.getAllByTestId('Mock ExploreSidebar')).toHaveLength(2)
    expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument()
  })
})
