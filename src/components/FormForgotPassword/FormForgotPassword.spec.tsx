import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/tests'
import FormForgotPassword from './FormForgotPassword'
import 'server.mock'
import userEvent from '@testing-library/user-event'
import { useRouter } from '../../../.jest/useRouter.mock'

const init = () => {
  return render(
    <MockedProvider>
      <FormForgotPassword />
    </MockedProvider>
  )
}

const getButton = () => screen.getByRole('button', { name: /send email/i })
const getEmailInput = () => screen.getByPlaceholderText('Email')

describe('<FormForgotPassword />', () => {
  it('should render correctly', () => {
    init()
    expect(getEmailInput()).toBeInTheDocument()
    expect(getButton()).toBeInTheDocument()
  })

  it('should show input error when invalid email is provided', async () => {
    init()
    userEvent.type(getEmailInput(), 'not an email')
    userEvent.click(getButton())

    expect(await screen.findByText(/email must be a valid email/i)).toBeInTheDocument()
  })

  it('should show form error when api return an error', async () => {
    init()
    userEvent.type(getEmailInput(), 'invalid@mail.com')
    userEvent.click(getButton())

    expect(await screen.findByText(/this email does not exist/i)).toBeInTheDocument()
  })

  it('should use query as initial email input value', async () => {
    useRouter.mockImplementationOnce(() => ({ query: { email: 'valid@mail.com' } } as never))
    init()
    expect(getEmailInput()).toHaveValue('valid@mail.com')
  })
})
