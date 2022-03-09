import { Story, Meta } from '@storybook/react'
import GameCard, { GameCardProps } from './GameCard'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    image: 'https://i.ibb.co/zPFXfK4/image.png',
    title: 'Population Zero',
    subtitle: 'Rockstar Games',
    price: 'R$215,00',
    favorite: false
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = args => <GameCard {...args} />

export const Discount: Story<GameCardProps> = args => <GameCard {...args} />
Discount.args = {
  discount: 'R$199,00'
}
