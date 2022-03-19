import { Story, Meta } from '@storybook/react'
import GameDetails, { GameDetailsProps } from './GameDetails'

export default {
  title: 'GameDetails',
  component: GameDetails,
  args: {
    developer: 'Gearbox Software',
    publisher: '2k',
    platforms: ['windows', 'mac', 'linux'],
    releaseDate: '2020-11-21T23:00:00',
    rating: 'BR18',
    genres: ['Action', 'Adventure']
  },
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
