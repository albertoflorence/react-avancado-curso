import { Story, Meta } from '@storybook/react'
import Copyright, { CopyrightProps } from './Copyright'

export default {
  title: 'Copyright',
  component: Copyright
} as Meta

export const Default: Story<CopyrightProps> = args => <Copyright {...args} />
