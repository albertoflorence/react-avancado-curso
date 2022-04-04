import { Story, Meta } from '@storybook/react'
import Loading, { LoadingProps } from './Loading'

export default {
  title: 'Loading',
  component: Loading,
  args: {
    type: 'linear'
  }
} as Meta

export const Default: Story<LoadingProps> = args => <Loading {...args} />
