import { Story, Meta } from '@storybook/react'
import Icon, { IconProps } from './Icon'

export default {
  title: 'Icon',
  component: Icon,
  args: {
    label: 'Email',
    size: 25,
    color: 'black'
  }
} as Meta

export const Default: Story<IconProps> = args => <Icon {...args} />
export const WithBadge: Story<IconProps> = args => <Icon {...args} />
WithBadge.args = {
  label: 'ShoppingCart',
  badge: 10
}
