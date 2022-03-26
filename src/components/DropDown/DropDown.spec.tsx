import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import DropDown from './Dropdown'

const init = () => {
  renderWithTheme(<DropDown title="title">children</DropDown>)
}

describe('<DropDown />', () => {
  it('should render title', () => {
    init()
    expect(screen.getByText('title')).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    init()

    const children = screen.getByText('children')

    expect(children).toHaveStyle({ opacity: 0 })
    expect(children).toHaveAttribute('aria-hidden', 'true')

    fireEvent.click(screen.getByText('title'))

    expect(children).toHaveStyle({ opacity: 1 })
    expect(children).toHaveAttribute('aria-hidden', 'false')
  })
})
