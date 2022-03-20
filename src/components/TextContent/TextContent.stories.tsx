import { Story, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from './TextContent'
import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<TextContentProps> = args => <TextContent {...args} />
