import { Story, Meta } from '@storybook/react'
import GameInfo, { GameInfoProps } from './GameInfo'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Red Dead Redemption 2',
    description:
      'Red Dead Redemption 2, the critically acclaimed open world epic from Rockstar Games and the highest rated game of the console generation, now enhanced for PC with new Story Mode content, visual upgrades and more.',
    price: 'R$230,00'
  }
} as Meta

export const Default: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '1300px', margin: '0 40px' }}>
    <GameInfo {...args} />
  </div>
)
