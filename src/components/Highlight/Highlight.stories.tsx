import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightProps } from './Highlight'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item },
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
