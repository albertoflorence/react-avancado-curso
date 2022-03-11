import { Story, Meta } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'

const makeItem = () => ({
  image: 'https://source.unsplash.com/random',
  title: 'Population Zero',
  subtitle: 'Rockstar Games',
  price: 'R$215,00',
  favorite: false
})

const items = [
  {
    ...makeItem(),
    title: 'Red Dead Redemption 2',
    price: 'R$280,00',
    discount: 'R$220,00',
    favorite: true,
    ribbon: 'Promoção'
  },
  ...new Array(4).fill(makeItem())
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {
    items,
    arrowColor: 'white'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<GameCardSliderProps> = args => (
  <div style={{ maxWidth: '1300px', margin: '50px auto' }}>
    <GameCardSlider {...args} />
  </div>
)
