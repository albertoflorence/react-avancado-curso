import { screen } from '@testing-library/react'
import { FilterProps } from 'components/ExploreSidebar'
import filtersMock from 'components/ExploreSidebar/mock'
import { renderWithTheme } from 'utils/tests'
import Games, { GamesTemplateProps } from './Games'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { fetchMoreMock, gamesMock } from './mock'
import userEvent from '@testing-library/user-event'
import { apolloCache } from 'utils/apollo'

const init = (mocks: MockedResponse[] = []) => {
  renderWithTheme(
    <MockedProvider mocks={mocks} cache={apolloCache}>
      <Games {...mockProps} />
    </MockedProvider>
  )
}

const mockProps: GamesTemplateProps = {
  filters: filtersMock as FilterProps[]
}

jest.mock('templates/Base', () => makeMock('Mock Base'))
jest.mock('components/ExploreSidebar', () => makeMock('Mock ExploreSidebar'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Games />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ExploreSidebar')).toHaveLength(2)
  })

  it('should render with data', async () => {
    init([gamesMock])
    expect(screen.getByLabelText('loading')).toBeInTheDocument()
    expect(await screen.findByRole('button', { name: /show more/i })).toBeInTheDocument()
    expect(screen.getByText('any game')).toBeInTheDocument()
  })

  it('should render more games', async () => {
    init([gamesMock, fetchMoreMock])
    expect(await screen.findByText('any game')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /show more/i }).firstChild as HTMLElement)
    expect(await screen.findByText('another game')).toBeInTheDocument()
  })
})
