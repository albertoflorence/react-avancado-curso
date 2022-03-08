import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    image: 'https://i.ibb.co/Sc0NPJw/Image.png',
    background: 'https://i.ibb.co/56F2tQQ/Background.png',
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<HighlightProps> = args => <Highlight {...args} />
export const Reverse: Story<HighlightProps> = args => <Highlight {...args} />
Reverse.args = {
  reverse: true
}
