import { render, screen } from 'utils/tests'
import FormProfile, { FormProfileProps } from './FormProfile'

const init = (props?: FormProfileProps) => {
  render(<FormProfile {...props} />)
}

const makeRole = (role: string) => (name: string) => screen.getByRole(role, { name })
const byHeading = makeRole('heading')
const byTextBox = makeRole('textbox')
const byButton = makeRole('button')

describe('<FormProfile />', () => {
  it('should render correctly', () => {
    init()

    expect(byHeading('My Profile')).toBeInTheDocument()

    expect(byTextBox('Username')).toBeInTheDocument()
    expect(byTextBox('E-mail')).toBeInTheDocument()

    expect(byButton('SAVE')).toBeInTheDocument()
  })

  it('should render with initial value', () => {
    init({ username: 'any name', email: 'any email' })

    expect(byTextBox('Username')).toHaveValue('any name')
    expect(byTextBox('E-mail')).toHaveValue('any email')
  })
})
