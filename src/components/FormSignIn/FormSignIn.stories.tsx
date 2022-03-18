import { Story, Meta } from '@storybook/react'
import FormSignIn from './FormSignIn'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Default: Story = () => (
  <div style={{ width: '300px', margin: 'auto' }}>
    <FormSignIn />
  </div>
)
