import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/tests'
import { useRouter } from '../../../.jest/useRouter.mock'
import FormForgotPassword from './FormResetPassword'
import 'server.mock'

const init = () => {
  return render(
    <MockedProvider>
      <FormForgotPassword />
    </MockedProvider>
  )
}

const getPasswordInput = () => screen.getByPlaceholderText('Password')
const getConfirmPasswordInput = () => screen.getByPlaceholderText('Confirm password')
const getButton = () => screen.getByRole('button', { name: /send email/i })

describe('<FormForgotPassword />', () => {
  it('should render correctly', () => {
    init()

    expect(getPasswordInput()).toBeInTheDocument()
    expect(getConfirmPasswordInput()).toBeInTheDocument()
    expect(getButton()).toBeInTheDocument()
  })

  it('should show validation error', async () => {
    init()
    userEvent.type(getPasswordInput(), 'Senha12345')
    userEvent.type(getConfirmPasswordInput(), 'Senha54321')
    userEvent.click(getButton())

    expect(await screen.findByText(/confirm password must match the password/i)).toBeInTheDocument()
  })

  it('should show invalid code error', async () => {
    useRouter.mockImplementation(() => ({ query: { code: 'invalid code' } } as never))
    init()
    const password = 'Senha12345'
    userEvent.type(getPasswordInput(), password)
    userEvent.type(getConfirmPasswordInput(), password)
    userEvent.click(getButton())

    expect(await screen.findByText(/invalid params/i)).toBeInTheDocument()
  })

  it('should redirect to login after password reset', async () => {
    const push = jest.fn()
    useRouter.mockImplementation(() => ({ query: { code: 'valid code' }, push } as never))
    init()
    const password = 'Senha12345'
    userEvent.type(getPasswordInput(), password)
    userEvent.type(getConfirmPasswordInput(), password)
    userEvent.click(getButton())
    await waitFor(() => {
      expect(push).toHaveBeenCalledWith('/login')
    })
  })
})
