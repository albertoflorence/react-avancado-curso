import { render, screen } from 'utils/tests'
import Base, { BaseProps } from './Base'

const init = (props?: BaseProps) => {
  render(<Base {...props}>children</Base>)
}

const makeMock = (testid: string) => ({
  __esModule: true,
  default: () => <div data-testid={testid} />
})

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }]
  })
}))

jest.mock('components/Menu/Menu', () => makeMock('Mock Menu'))
jest.mock('components/Footer/Footer', () => makeMock('Mock Footer'))

describe('<Base />', () => {
  it('should render the children', () => {
    init()
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  it('should render the Menu', () => {
    init()
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
  })

  it('should render the Footer', () => {
    init()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
