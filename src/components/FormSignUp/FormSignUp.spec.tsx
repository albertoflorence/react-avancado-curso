import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/tests'
import FormSignUp from './FormSignUp'

const init = () => {
  render(
    <MockedProvider>
      <FormSignUp />
    </MockedProvider>
  )
}

const textField = (name: string) => screen.getByPlaceholderText(name)
const link = (name: string) => screen.getByRole('link', { name: new RegExp(name, 'i') })
const button = (name: string) => screen.getByRole('button', { name: new RegExp(name, 'i') })

describe('<FormSignUp />', () => {
  it('should render correctly', () => {
    init()

    expect(textField('Username')).toBeInTheDocument()
    expect(textField('Email')).toBeInTheDocument()
    expect(textField('Password')).toBeInTheDocument()
    expect(textField('Confirm password')).toBeInTheDocument()
    expect(button('sign up now')).toBeInTheDocument()
    expect(link('sign in')).toHaveAttribute('href', '/login')
  })
})
