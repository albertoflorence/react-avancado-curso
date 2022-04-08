import { Story, Meta } from '@storybook/react'
import mockCartList from 'components/CartList/mock'
import CartDropdown, { CartDropdownProps } from './CartDropdown'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: mockCartList,
    total: 'R$300,00',
    quantity: mockCartList.length
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = args => (
  <div style={{ maxWidth: '80%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
