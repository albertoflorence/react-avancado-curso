import { Story, Meta } from '@storybook/react'
import GameItem, { GameItemProps } from './GameItem'

export default {
  title: 'Game/GameItem',
  component: GameItem,
  args: {
    title: 'Red Dead Redemption 2',
    image: 'https://i.ibb.co/zPFXfK4/image.png',
    price: 'R$215,00',
    downloadLink: '/download/red-dead-redemption2',
    paymentInfo: {
      number: '**** **** **** 4325',
      purchaseDate: 'Purchase made on 10/02/2022 at 20:32',
      flag: 'MasterCard',
      image: 'https://i.ibb.co/YPhQnGB/Master-Card.jpg'
    }
  }
} as Meta

export const Default: Story<GameItemProps> = args => (
  <div style={{ maxWidth: '1300px' }}>
    <GameItem {...args} />
  </div>
)
