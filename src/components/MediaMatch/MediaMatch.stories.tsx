import { Story, Meta } from '@storybook/react'
import MediaMatch, { MediaMatchProps } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story<MediaMatchProps> = args => <MediaMatch {...args} />
Desktop.args = {
  greaterThan: 'medium',
  children: 'Only on Desktop'
}
export const Mobile: Story<MediaMatchProps> = args => <MediaMatch {...args} />
Mobile.args = {
  lessThan: 'medium',
  children: 'Only on Mobile'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
