import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/tests'
import FormForgotPassword from './FormResetPassword'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()
useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

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

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send email/i })).toBeInTheDocument()
  })
})
