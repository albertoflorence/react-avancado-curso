import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/tests'
import FormForgotPassword from './FormForgotPassword'

const init = () => {
  return render(
    <MockedProvider>
      <FormForgotPassword />
    </MockedProvider>
  )
}

describe('<FormForgotPassword />', () => {
  it('should render correctly', () => {
    init()

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument()
  })
})
