import { render, screen } from 'utils/tests'
import Cart, { CartTemplateProps } from './Cart'

import mockHighlight from 'components/Highlight/mock'
import mockGameCards from 'components/GameCardSlider/mock'
import mockPayments from 'components/PaymentOptions/mock'

const init = (props?: Partial<CartTemplateProps>) => {
  render(<Cart {...mockProps} {...props} />)
}

const mockProps: CartTemplateProps = {
  paymentOptions: { cards: mockPayments },
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
jest.mock('components/CartList', () => makeMock('Mock CartList'))
jest.mock('components/PaymentOptions', () => makeMock('Mock PaymentOptions'))
jest.mock('components/Showcase', () => makeMock('Mock Showcase'))

const testElements = (testIds: string[]) =>
  testIds.forEach(id => expect(screen.getByTestId(id)).toBeInTheDocument())

describe('<Cart />', () => {
  it('should render correctly', () => {
    init()
    testElements(['Mock Base', 'Mock CartList', 'Mock PaymentOptions', 'Mock Showcase'])
    expect(screen.getByRole('heading', { name: /my cart/i })).toBeInTheDocument()
  })
})
