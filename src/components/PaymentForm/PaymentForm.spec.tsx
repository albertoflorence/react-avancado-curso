import { render } from 'utils/tests'
import PaymentForm from './PaymentForm'

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="CardElement">{children}</div>
  ),
  useStripe: jest.fn(),
  useElements: jest.fn()
}))

const init = () => {
  return render(<PaymentForm session={{ jwt: '123', expires: '0' }} />)
}
describe('<PaymentForm />', () => {
  it('should render', () => {
    const { container } = init()
    expect(container).toBeTruthy()
  })
})
