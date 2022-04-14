import { fireEvent, render, screen } from 'utils/tests'
import PaymentForm, { PaymentFormProps } from './PaymentForm'

const init = (props?: Partial<PaymentFormProps>) => {
  render(<PaymentForm handlePayment={jest.fn} {...props} />)
}

describe('<PaymentForm />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByText('Continue shopping')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy now' })).toBeInTheDocument()
  })

  it('should call handlePayment when buy now is clicked', () => {
    const handlePayment = jest.fn()
    init({ handlePayment })

    fireEvent.click(screen.getByRole('button', { name: 'Buy now' }))

    expect(handlePayment).toHaveBeenCalled()
  })
})
