import { fireEvent, render, screen, waitFor } from 'utils/tests'
import PaymentOptions, { PaymentOptionsProps } from './PaymentOptions'
import mockCards from './mock'

const init = (props?: Partial<PaymentOptionsProps>) => {
  render(<PaymentOptions cards={mockCards} handlePayment={jest.fn} {...props} />)
}

describe('<PaymentOptions />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByText(mockCards[0].number)).toBeInTheDocument()
    expect(screen.getByText('Add new credit card')).toBeInTheDocument()
    expect(screen.getByText('Continue shopping')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy now' })).toBeInTheDocument()
  })

  it('should check the radio when card is clicked', async () => {
    init()
    const item = /4325/
    fireEvent.click(screen.getByLabelText(item))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: item })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    init({ handlePayment })

    fireEvent.click(screen.getByText('Buy now'))

    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when buy now is clicked', () => {
    const handlePayment = jest.fn()
    init({ handlePayment })

    fireEvent.click(screen.getByLabelText(/4325/))
    fireEvent.click(screen.getByRole('button', { name: 'Buy now' }))

    expect(handlePayment).toHaveBeenCalled()
  })
})
