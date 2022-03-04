import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Hello World',
    color: 'black'
  }
} as Meta

export const Default: Story<HeadingProps> = args => <Heading {...args} />
