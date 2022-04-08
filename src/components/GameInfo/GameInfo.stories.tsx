import { Story, Meta } from '@storybook/react'
import { CartContextData } from 'hooks'
import GameInfo, { GameInfoProps } from './GameInfo'
import mockInfo from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockInfo,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameInfoProps> = args => (
  <div style={{ maxWidth: '1300px', padding: '15px' }}>
    <GameInfo {...args} />
  </div>
)

export const IsInCart: Story<GameInfoProps & CartContextData> = args => (
  <div style={{ maxWidth: '1300px', padding: '15px' }}>
    <GameInfo {...args} />
  </div>
)

IsInCart.args = {
  hasItem: () => true
}
