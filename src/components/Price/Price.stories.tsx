import { Story, Meta } from '@storybook/react'
import Price, { PriceProps } from './Price'

export default {
  title: 'Price',
  component: Price,
  args: {
    children: 'R$200, 00'
  }
} as Meta

export const Default: Story<PriceProps> = args => <Price {...args} />
