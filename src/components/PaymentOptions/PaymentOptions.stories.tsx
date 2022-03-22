import { Story, Meta } from '@storybook/react'
import PaymentOptions, { PaymentOptionsProps } from './PaymentOptions'
import mockCards from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: mockCards
  },
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta

export const Default: Story<PaymentOptionsProps> = args => (
  <div style={{ maxWidth: '400px' }}>
    <PaymentOptions {...args} />
  </div>
)
