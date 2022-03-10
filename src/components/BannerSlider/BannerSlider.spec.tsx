import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests'
import BannerSlider from './BannerSlider'

const items = [
  {
    image: 'https://source.unsplash.com/random',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best Seller'
  },
  {
    image: 'https://source.unsplash.com/random',
    title: 'Cyberpunk 2077',
    subtitle:
      '<p><strong>Cyberpunk 2077</strong> is an open-world, action-adventure RPG set in the megalopolis of Night City</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

const init = () => {
  const { container } = renderWithTheme(<BannerSlider items={items} />)
  return container
}

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const container = init()
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const container = init()
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(screen.getByRole('heading', { name: 'Defy death', hidden: false })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Cyberpunk 2077', hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with dots', () => {
    const container = init()
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
