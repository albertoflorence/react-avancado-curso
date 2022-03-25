import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Overlay, { OverlayProps } from './Overlay'

const init = (props?: Partial<OverlayProps>) => {
  return renderWithTheme(
    <Overlay {...props} icon={<span data-testid="icon" />}>
      children
    </Overlay>
  ).container.firstChild as HTMLElement
}

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
})
