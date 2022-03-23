import { Story, Meta } from '@storybook/react'
import ProfileMenu from './ProfileMenu'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = args => <ProfileMenu {...args} />
