import { Story, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from './BannerSlider'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<BannerSliderProps> = args => (
  <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
    <BannerSlider {...args} items={items} />
  </div>
)

const items = [
  {
    image: 'https://source.unsplash.com/random',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best Seller'
  },
  {
    image: 'https://source.unsplash.com/random',
    title: 'Cyberpunk 2077',
    subtitle:
      '<p><strong>Cyberpunk 2077</strong> is an open-world, action-adventure RPG set in the megalopolis of Night City</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]
