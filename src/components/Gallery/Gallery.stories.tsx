import { Story, Meta } from '@storybook/react'
import Gallery, { GalleryProps } from './Gallery'
import galleryMock from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: galleryMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<GalleryProps> = args => (
  <div style={{ maxWidth: '1300px', margin: 'auto' }}>
    <Gallery {...args} />
  </div>
)
