import { Story, Meta } from '@storybook/react'
import PaymentForm, { PaymentFormProps } from './PaymentForm'

export default {
  title: 'PaymentForm',
  component: PaymentForm,
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  }
} as Meta

export const Default: Story<PaymentFormProps> = args => (
  <div style={{ maxWidth: '400px' }}>
    <PaymentForm {...args} />
  </div>
)
