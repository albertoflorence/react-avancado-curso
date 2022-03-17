import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from './Radio'

export default {
  title: 'Radio',
  component: Radio,
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

export const Default: Story<RadioProps> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Radio {...args} label="Action" name="radio" value="first" />
    <Radio {...args} label="Adventure" name="radio" value="second" />
    <Radio {...args} label="RPG" name="radio" value="third" />
  </div>
)
