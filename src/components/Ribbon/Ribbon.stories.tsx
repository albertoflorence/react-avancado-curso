import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from './Ribbon'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Won Games'
  }
} as Meta

export const Default: Story<RibbonProps> = args => (
  <div
    style={{
      width: '400px',
      height: '250px',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
