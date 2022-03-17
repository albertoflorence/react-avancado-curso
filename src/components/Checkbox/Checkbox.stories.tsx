import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    color: 'white'
  },
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Checkbox {...args} label="Action" />
    <Checkbox {...args} label="Adventure" defaultChecked />
    <Checkbox {...args} label="RPG" />
  </div>
)
