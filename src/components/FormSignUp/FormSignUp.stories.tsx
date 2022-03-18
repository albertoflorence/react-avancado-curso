import { Story, Meta } from '@storybook/react'
import FormSignUp from './FormSignUp'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Default: Story = () => (
  <div style={{ width: '300px', margin: 'auto' }}>
    <FormSignUp />
  </div>
)
