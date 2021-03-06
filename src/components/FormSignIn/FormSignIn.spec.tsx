import { render, screen } from 'utils/tests'
import FormSignIn from './FormSignIn'

const init = () => {
  render(<FormSignIn />)
}

const textField = (name: string) => screen.getByPlaceholderText(name)
const link = (name: string) => screen.getByRole('link', { name: new RegExp(name, 'i') })
const button = (name: string) => screen.getByRole('button', { name: new RegExp(name, 'i') })

describe('<FormSignIn />', () => {
  it('should render correctly', () => {
    init()

    expect(textField('Email')).toBeInTheDocument()
    expect(textField('Password')).toBeInTheDocument()
    expect(button('sign in now')).toBeInTheDocument()
    expect(link('forgot your password')).toBeInTheDocument()
    expect(link('sign up')).toHaveAttribute('href', '/signup')
  })
})
