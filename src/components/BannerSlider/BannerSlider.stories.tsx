import { Story, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from './BannerSlider'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
