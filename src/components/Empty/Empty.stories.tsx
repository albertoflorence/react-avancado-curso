import { Story, Meta } from '@storybook/react'
import Empty, { EmptyProps } from './Empty'

export default {
  title: 'Empty',
  component: Empty,
  args: {
    title: 'No results found',
    description: 'Make sure all words are spelled correctly or try different keywords',
    toHome: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = args => <Empty {...args} />
