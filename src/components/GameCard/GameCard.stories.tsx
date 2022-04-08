import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks'
import GameCard, { GameCardProps } from './GameCard'

export default {
  title: 'Game/GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
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

export const HasItem: Story<GameCardProps & CartContextData> = args => <GameCard {...args} />

HasItem.args = {
  hasItem: () => true
}

export const Discount: Story<GameCardProps> = args => <GameCard {...args} />
Discount.args = {
  discount: 'R$199,00'
}
