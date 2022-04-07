import { render, screen } from 'utils/tests'

import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'

const init = (props?: GameCardSliderProps) => {
  const { container } = render(<GameCardSlider {...props} items={items} />)
  return container
}

const items = [
  {
    image: 'https://i.ibb.co/zPFXfK4/image.png',
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    price: 'R$215,00',
    favorite: false,
    slug: 'population-zero'
  },
  {
    image: 'https://i.ibb.co/zPFXfK4/image.png',
    title: 'Population Zero 2',
    subtitle: 'Rockstar Games',
    price: 'R$215,00',
    favorite: false,
    slug: 'population-zero'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with 1 active item', () => {
    const sut = init()
    expect(sut.querySelector('.slick-active')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Population Zero', hidden: false })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Population Zero 2', hidden: true })
    ).toBeInTheDocument()
  })
})
