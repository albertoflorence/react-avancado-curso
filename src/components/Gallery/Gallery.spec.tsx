import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import Gallery from './Gallery'

const init = () => renderWithTheme(<Gallery {...props} />)

const props = {
  items: [
    { src: 'any_url', alt: 'any alt' },
    { src: 'any_url 2', alt: 'any alt2' }
  ]
}

const getSlide = () => screen.getByRole('button', { name: 'Thumb - any alt' })

describe('<Gallery />', () => {
  it('should render slide as button', () => {
    init()
    expect(getSlide()).toBeInTheDocument()
  })

  it('should open the modal', () => {
    init()
    const modal = screen.getByLabelText('modal')
    const slide = getSlide()

    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(slide)
    expect(modal).toHaveAttribute('aria-hidden', 'false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should close the modal', () => {
    const { container } = init()
    const modal = screen.getByLabelText('modal')
    const slide = getSlide()
    const close = screen.getByRole('img', { name: 'close', hidden: true })

    fireEvent.click(slide)
    fireEvent.click(close)
    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })

    fireEvent.click(slide)
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal).toHaveAttribute('aria-hidden', 'true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should render modal with the selected image', async () => {
    init()
    const slide = getSlide()
    fireEvent.click(slide)
    const modalSlide = await screen.findByRole('img', { name: 'any alt' })
    expect(modalSlide.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
