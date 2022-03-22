import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import Icon from 'components/Icon'

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
  startIcon: <Icon label="AddShoppingCart" />
}

export const WithEndIcon: Story<ButtonProps> = args => <Button {...args} />
WithEndIcon.args = {
  children: 'Buy now',
  endIcon: <Icon label="AddShoppingCart" />
}

export const AsLink: Story<ButtonProps> = args => <Button {...args} />
AsLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
