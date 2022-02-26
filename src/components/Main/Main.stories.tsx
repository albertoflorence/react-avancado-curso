import Main from './Main'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = args => <Main {...args} />
Basic.args = {
  title: 'title basic',
  description: 'description basic'
}
