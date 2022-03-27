import { Story, Meta } from '@storybook/react'
import UserDropdown, { UserDropdownProps } from './UserDropdown'

export default {
  title: 'UserDropdown',
  component: UserDropdown,
  args: {
    username: 'John'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<UserDropdownProps> = args => (
  <div style={{ width: 500, marginLeft: 'auto' }}>
    <UserDropdown {...args} />
  </div>
)
