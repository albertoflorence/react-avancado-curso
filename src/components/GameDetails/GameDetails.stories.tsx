import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from './GameDetails'
import mockDetails from './mock'
export default {
  title: 'GameDetails',
  component: GameDetails,
  args: mockDetails,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = args => (
  <div
    style={{
      maxWidth: '1300px',
      padding: '30px'
    }}
  >
    <GameDetails {...args} />
  </div>
)
