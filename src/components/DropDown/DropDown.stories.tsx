import { Story, Meta } from '@storybook/react'
import DropDown, { DropDownProps } from './DropDown'

export default {
  title: 'DropDown',
  component: DropDown,
  args: {
    title: 'title'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<DropDownProps> = args => (
  <div style={{ width: 'fit-content', margin: 'auto' }}>
    <DropDown {...args}>
      Lorem ipsum dolor sit amet consectetur sapiente, earum iure nihil repellendus distinctio, eos
      ut porro animi at iure?
    </DropDown>
  </div>
)
