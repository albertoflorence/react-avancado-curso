import { Story, Meta } from '@storybook/react'
import mockCards from 'components/PaymentOptions/mock'
import CardsList, { CardsListProps } from './CardsList'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: mockCards
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story<CardsListProps> = args => <CardsList {...args} />
