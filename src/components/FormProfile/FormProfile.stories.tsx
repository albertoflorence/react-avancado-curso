import { Story, Meta } from '@storybook/react'
import FormProfile, { FormProfileProps } from './FormProfile'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
  args: {
    userName: 'John Cage',
    email: 'john.cage@gmail.com'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<FormProfileProps> = args => <FormProfile {...args} />
