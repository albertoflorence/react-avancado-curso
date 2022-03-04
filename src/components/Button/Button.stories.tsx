import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import { AddShoppingCart } from 'components/Icons'
export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = args => <Button {...args} />
Default.args = {
  children: 'Buy now'
}

export const WithStartIcon: Story<ButtonProps> = args => <Button {...args} />
WithStartIcon.args = {
  children: 'Buy now',
  startIcon: <AddShoppingCart />
}

export const WithEndIcon: Story<ButtonProps> = args => <Button {...args} />
WithEndIcon.args = {
  children: 'Buy now',
  endIcon: <AddShoppingCart />
}
