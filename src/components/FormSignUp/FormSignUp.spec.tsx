import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import FormSignUp from './FormSignUp'

const init = () => {
  renderWithTheme(<FormSignUp />)
}

const textField = (name: string) => screen.getByPlaceholderText(name)
const link = (name: string) => screen.getByRole('link', { name: new RegExp(name, 'i') })

describe('<FormSignUp />', () => {
  it('should render correctly', () => {
    init()

    expect(textField('Name')).toBeInTheDocument()
    expect(textField('Email')).toBeInTheDocument()
    expect(textField('Password')).toBeInTheDocument()
    expect(textField('Confirm password')).toBeInTheDocument()
    expect(link('sign up now')).toBeInTheDocument()
    expect(link('sign in')).toHaveAttribute('href', '/login')
  })
})
