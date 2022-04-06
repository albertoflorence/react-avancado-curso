import { screen } from '@testing-library/react'
import { FilterProps } from 'components/ExploreSidebar'
import filtersMock from 'components/ExploreSidebar/mock'
import { renderWithTheme } from 'utils/tests'
import Games, { GamesTemplateProps } from './Games'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { noGamesMock, fetchMoreMock, gamesMock } from './mock'
import userEvent from '@testing-library/user-event'
import { apolloCache } from 'utils/apollo'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

const init = (mocks: MockedResponse[] = [noGamesMock]) => {
  apolloCache.reset()
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
jest.mock('components/Link', () => makeMock(''))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})
const byRole = (role: string, name: string) => screen.getAllByRole(role, { name, hidden: true })[0]

describe('<Games />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getAllByText('Price')).toHaveLength(2)
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

  it('should call push with correct value', async () => {
    init()
    userEvent.click(byRole('checkbox', 'Mac'))
    userEvent.click(byRole('checkbox', 'Windows'))
    userEvent.click(byRole('radio', 'High to low'))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['mac', 'windows'], sortBy: 'high-to-low' }
    })
  })

  it('should render empty if no games is found', async () => {
    init()
    expect(
      await screen.findByText(/we couldn't find anything matching your criteria/i)
    ).toBeInTheDocument()
  })
})
