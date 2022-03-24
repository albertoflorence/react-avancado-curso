import { Story, Meta } from '@storybook/react'
import mockOrderList from './mock'
import OrdersList, { OrdersListProps } from './OrdersList'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: mockOrderList
  }
} as Meta

export const Default: Story<OrdersListProps> = args => <OrdersList {...args} />
