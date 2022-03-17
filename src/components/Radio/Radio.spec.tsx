import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme, theme } from 'utils/tests'
import Radio, { RadioProps } from './Radio'

const init = (props?: RadioProps) => {
  renderWithTheme(<Radio {...props} />)
}

describe('<Radio />', () => {
  it('should render', () => {
    init()
    expect(screen.getByRole('radio')).toBeInTheDocument()
  })

  it('should render with label', () => {
    init({ label: 'any label' })
    expect(screen.getByText('any label')).toBeInTheDocument()
  })

  it('should render with black label as default', () => {
    init({ label: 'any label' })
    expect(screen.getByText('any label')).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render with white label', () => {
    init({ label: 'any label', color: 'white' })
    expect(screen.getByText('any label')).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should dispatch onChange when status change ', async () => {
    const onCheck = jest.fn()
    init({ onCheck, value: 'any_value' })
    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalled()
    })
    expect(onCheck).toHaveBeenCalledWith('any_value')
  })

  it('should be accessible with tab', async () => {
    init()

    expect(document.body).toHaveFocus()
    userEvent.tab()
    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
