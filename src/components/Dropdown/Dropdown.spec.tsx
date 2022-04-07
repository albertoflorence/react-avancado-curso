import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from 'utils/tests'
import DropDown from './Dropdown'

const init = () => {
  render(<DropDown title="title">content</DropDown>)
}

describe('<DropDown />', () => {
  it('should render title', () => {
    init()
    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    init()

    const content = screen.getByText('content')

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('title'))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content).toHaveAttribute('aria-hidden', 'false')
  })

  it('should handle close if click outside', async () => {
    init()

    const content = screen.getByText('content')

    fireEvent.click(screen.getByText('title'))
    expect(content).toHaveStyle({ opacity: 1 })

    userEvent.click(document.body)
    expect(content).toHaveStyle({ opacity: 0 })
  })
})
