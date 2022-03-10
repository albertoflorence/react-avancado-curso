import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Best Seller'
  },
  parameters: {
    layout: 'fullScreen'
  }
} as Meta

export const Default: Story<BannerProps> = args => (
  <div
    style={{
      maxWidth: '1040px',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)
