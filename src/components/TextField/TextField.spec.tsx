import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Icon from 'components/Icon'
import { renderWithTheme } from 'utils/tests'
import TextField, { TextFieldProps } from './TextField'

const init = (props?: TextFieldProps) => {
  renderWithTheme(<TextField {...props} />)
}

describe('<TextField />', () => {
  it('should render with label', () => {
    init({ label: 'any label', id: 'text_field' })
    expect(screen.getByLabelText('any label')).toBeInTheDocument()
  })

  it('should change its value', async () => {
    const onInput = jest.fn()
    init({ onInput })

    const input = screen.getByRole('textbox')
    const text = 'any text'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(text.length)
      expect(input).toHaveValue(text)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should be accessible with tab', () => {
    init()
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with startIcon', () => {
    init({ startIcon: <Icon data-testid="icon" label="Email" /> })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with endIcon', () => {
    init({ endIcon: <Icon data-testid="icon" label="Email" /> })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render disabled', () => {
    init({ disabled: true })
    expect(screen.getByRole('textbox')).toHaveAttribute('disabled')
  })

  it('should not change the value if disabled', async () => {
    const onInput = jest.fn()
    init({ disabled: true, onInput })
    const input = screen.getByRole('textbox')
    const text = 'any text'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(onInput).toHaveBeenCalledTimes(0)
    })
    expect(input).not.toHaveValue(text)
  })

  it('should render with error', () => {
    init({ error: 'any error' })
    expect(screen.getByText('any error')).toBeInTheDocument()
  })
})
