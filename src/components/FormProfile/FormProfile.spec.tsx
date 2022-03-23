import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import FormProfile, { FormProfileProps } from './FormProfile'

const init = (props?: FormProfileProps) => {
  renderWithTheme(<FormProfile {...props} />)
}

const makeRole = (role: string) => (name: string) => screen.getByRole(role, { name })
const byHeading = makeRole('heading')
const byTextBox = makeRole('textbox')
const byButton = makeRole('button')

describe('<FormProfile />', () => {
  it('should render correctly', () => {
    init()

    expect(byHeading('My Profile')).toBeInTheDocument()

    expect(byTextBox('Name')).toBeInTheDocument()
    expect(byTextBox('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('New Password')).toBeInTheDocument()
    expect(byButton('SAVE')).toBeInTheDocument()
  })

  it('should render with initial value', () => {
    init({ userName: 'any name', email: 'any email' })

    expect(byTextBox('Name')).toHaveValue('any name')
    expect(byTextBox('E-mail')).toHaveValue('any email')
  })
})
