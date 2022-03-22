import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import PaymentOptions from './PaymentOptions'
import mockCards from './mock'

const init = () => {
  renderWithTheme(<PaymentOptions cards={mockCards} handlePayment={() => jest.fn()} />)
}

describe('<PaymentOptions />', () => {
  it('should render', () => {
    init()

    expect(screen.getByText(mockCards[0].number)).toBeInTheDocument()
    expect(screen.getByText('Add new credit card')).toBeInTheDocument()
    expect(screen.getByText('Continue shopping')).toBeInTheDocument()
    expect(screen.getByText('Buy now')).toBeInTheDocument()
  })
})
