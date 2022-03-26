import { Story, Meta } from '@storybook/react'
import GameCardSlider, { GameCardSliderProps } from './GameCardSlider'
import items from './mock'

export default {
  title: 'Game/GameCardSlider',
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
