import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from './Banner'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    image: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullScreen'
  }
} as Meta

export const Default: Story<BannerProps> = args => <Banner {...args} />
