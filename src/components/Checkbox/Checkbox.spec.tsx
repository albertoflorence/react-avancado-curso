import { render, screen, theme, waitFor } from 'utils/tests'
import Checkbox, { CheckboxProps } from './Checkbox'
import userEvent from '@testing-library/user-event'

const init = (props?: CheckboxProps) => {
  render(<Checkbox {...props} />)
}

describe('<Checkbox />', () => {
  it('should render', () => {
    init()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render with label', () => {
    init({ label: 'any label' })
    expect(screen.getByLabelText('any label')).toBeInTheDocument()
  })

  it('should render with black label as default', () => {
    init({ label: 'any label' })
    expect(screen.getByText('any label')).toHaveStyle({ color: theme.colors.black })
  })

  it('should render with white label', () => {
    init({ label: 'any label', color: 'white' })
    expect(screen.getByText('any label')).toHaveStyle({ color: theme.colors.white })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    init({ label: 'any label', onCheck })
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should render checked', async () => {
    init({ label: 'any label', defaultChecked: true })
    expect(screen.getByRole('checkbox', { checked: true }))
  })
  it('should be accessible with tab', () => {
    init()
    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
