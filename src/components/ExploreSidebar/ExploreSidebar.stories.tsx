import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from './ExploreSidebar'
import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  argTypes: {
    onFilter: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = args => (
  <div style={{ maxWidth: '350px' }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = args => (
  <div style={{ maxWidth: '350px' }}>
    <ExploreSidebar {...args} />
  </div>
)
WithInitialValues.args = {
  initialValues: {
    system: ['mac'],
    genre: ['adventure', 'fps'],
    sortBy: 'low-to-high'
  }
}
