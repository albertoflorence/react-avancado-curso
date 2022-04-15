import gameCardsMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { render, screen } from 'utils/tests'
import Success, { SuccessTemplateProps } from './Success'

const init = (props?: SuccessTemplateProps) => {
  render(<Success {...props} />)
}

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

jest.mock('templates/Base', () => makeMock('Mock Base'))
jest.mock('components/GameCardSlider', () => makeMock('Mock GameCardSlider'))
jest.mock('components/Highlight', () => makeMock('Mock Highlight'))

describe('<Success />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /your purchase was successful/i }))
    expect(screen.getByText(/wait for your payment details by email/i))
    expect(screen.getByRole('link', { name: /orders list/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )
  })
  it('should render recommended games ', () => {
    init({
      recommended: {
        gameCards: gameCardsMock,
        highlight: highlightMock
      }
    })
    expect(screen.getByTestId('Mock GameCardSlider')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Highlight')).toBeInTheDocument()
  })
})
