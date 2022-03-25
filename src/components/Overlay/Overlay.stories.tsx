import { Story, Meta } from '@storybook/react'
import Overlay, { OverlayProps } from './Overlay'

export default {
  title: 'Overlay',
  component: Overlay,
  args: {
    children: 'content'
  }
} as Meta

export const Default: Story<OverlayProps> = args => <Overlay {...args} />
