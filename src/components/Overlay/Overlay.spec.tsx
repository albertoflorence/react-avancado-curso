import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Overlay, { OverlayProps } from './Overlay'

const init = (props?: Partial<OverlayProps>) => {
  return renderWithTheme(<Overlay {...props}>children</Overlay>).container.firstChild as HTMLElement
}

const getClose = () => screen.getByLabelText('Close Overlay')

describe('<Overlay />', () => {
  it('should render the children', () => {
    init()
    expect(screen.getByText('children')).toBeInTheDocument()
  })

  it('should render closed', () => {
    const overlay = init({ open: false })
    expect(overlay.getAttribute('aria-hidden')).toBe('true')
    expect(overlay).toHaveStyle({ opacity: 0 })
  })

  it('should render opened', () => {
    const overlay = init({ open: true })

    expect(overlay.getAttribute('aria-hidden')).toBe('false')
    expect(overlay).toHaveStyle({ opacity: 1 })
  })

  it('should call onClose when close button is clicked', () => {
    const handleClose = jest.fn()
    init({ handleClose })
    fireEvent.click(getClose())
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
