import { Story, Meta } from '@storybook/react'
import Showcase, { ShowcaseProps } from './Showcase'
import gameCards from 'components/GameCardSlider/mock'
import highlight from 'components/Highlight/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = args => <Showcase {...args} />
Default.args = {
  gameCards,
  highlight,
  title: 'Most Popular'
}

export const WithoutHighlight: Story<ShowcaseProps> = args => <Showcase {...args} />
WithoutHighlight.args = {
  gameCards,
  title: 'Highlight'
}

export const WithoutGameCards: Story<ShowcaseProps> = args => <Showcase {...args} />
WithoutGameCards.args = {
  highlight,
  title: 'Free Games'
}
