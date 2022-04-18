import { render, screen } from 'utils/tests'
import Cart, { CartTemplateProps } from './Cart'

import mockHighlight from 'components/Highlight/mock'
import mockGameCards from 'components/GameCardSlider/mock'

const init = (props?: Partial<CartTemplateProps>) => {
  render(<Cart {...mockProps} {...props} />)
}

const mockProps = {
  session: {
    expires: '0',
    jwt: '123'
  },
  recommended: {
    gameCards: mockGameCards,
    highlight: mockHighlight
  }
}

const makeMock = (testid: string) => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid={testid}>{children}</div>
  )
})

jest.mock('templates/Base', () => makeMock('Mock Base'))
jest.mock('components/PaymentForm', () => makeMock('Mock PaymentForm'))
jest.mock('components/Showcase', () => makeMock('Mock Showcase'))

const testElements = (testIds: string[]) =>
  testIds.forEach(id => expect(screen.getByTestId(id)).toBeInTheDocument())

describe('<Cart />', () => {
  it('should render correctly', () => {
    init()
    testElements(['Mock Base', 'Mock PaymentForm', 'Mock Showcase'])
    expect(screen.getByRole('heading', { name: /my cart/i })).toBeInTheDocument()
  })
})
