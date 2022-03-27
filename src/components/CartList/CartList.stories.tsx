import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from './CartList'
import items from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items,
    total: 'R$430,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = args => (
  <div style={{ maxWidth: '800px' }}>
    <CartList {...args} />
  </div>
)

export const WithButton: Story<CartListProps> = args => (
  <div style={{ maxWidth: '800px' }}>
    <CartList {...args} hasButton />
  </div>
)

export const Empty: Story<CartListProps> = args => (
  <div style={{ maxWidth: '800px' }}>
    <CartList {...args} hasButton items={[]} />
  </div>
)
