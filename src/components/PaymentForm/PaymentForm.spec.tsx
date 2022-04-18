import { render, screen, waitFor } from 'utils/tests'
import PaymentForm from './PaymentForm'
import * as paymentMethods from 'services/payment'
import { CartContextData } from 'hooks'

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card-element">{children}</div>
  ),
  useStripe: jest.fn(),
  useElements: jest.fn()
}))

jest.mock('components/Link', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Link Mock">{children}</div>
  )
}))

const createPaymentIntentSpy = jest.spyOn(paymentMethods, 'createPaymentIntent')

const mockItems = () => [{ id: '1', image: 'image', price: 'price', slug: 'slug', title: 'title' }]

const init = (cartProviderProps?: Partial<CartContextData>) => {
  return render(<PaymentForm session={{ jwt: '123', expires: '0' }} />, { cartProviderProps })
}

describe('<PaymentForm />', () => {
  it('should render correctly', () => {
    init()
    expect(screen.getByRole('heading', { name: 'Payment' })).toBeInTheDocument()
    expect(screen.getByTestId('card-element')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy now' })).toBeDisabled()
  })

  it('should render free payment method', async () => {
    createPaymentIntentSpy.mockResolvedValueOnce({ freeGames: true })
    init({ items: mockItems() })

    await waitFor(() => {
      expect(screen.getByText('You can get for free !')).toBeInTheDocument()
    })
  })

  it('should render error', async () => {
    createPaymentIntentSpy.mockResolvedValueOnce({ error: 'any error' })
    init({ items: mockItems() })

    await waitFor(() => {
      expect(screen.getByText('any error')).toBeInTheDocument()
    })
  })
})
