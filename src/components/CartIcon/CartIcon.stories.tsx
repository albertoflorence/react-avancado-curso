import { Story, Meta } from '@storybook/react'
import CartIcon from './CartIcon'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta

export const Default: Story = args => <CartIcon {...args} />
