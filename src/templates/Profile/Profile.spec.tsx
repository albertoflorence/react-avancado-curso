import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Profile from './Profile'

const init = () => {
  renderWithTheme(<Profile>children</Profile>)
}

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: 'profile/me' }))
}))

jest.mock('templates/Base', () => makeMock('Mock Base'))
jest.mock('components/ProfileMenu', () => makeMock('Mock ProfileMenu'))

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

describe('<Profile />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'My Profile' })).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
    expect(screen.getByText('children')).toBeInTheDocument()
  })
})
