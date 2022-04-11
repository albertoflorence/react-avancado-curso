import { Story, Meta } from '@storybook/react'
import FormMessage, { FormMessageProps } from './FormMessage'

export default {
  title: 'FormMessage',
  component: FormMessage,
  args: {
    type: 'success',
    children: 'You made it'
  }
} as Meta

export const Default: Story<FormMessageProps> = args => <FormMessage {...args} />
