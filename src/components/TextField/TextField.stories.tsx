import { Story, Meta } from '@storybook/react'
import Icon from 'components/Icon'
import TextField, { TextFieldProps } from './TextField'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    id: 'email',
    placeholder: 'Email',
    disabled: false
  },
  argTypes: {
    onInputChange: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '300px' }}>
    <TextField {...args} />
  </div>
)

export const WithStartIcon: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '300px' }}>
    <TextField {...args} startIcon={<Icon label="Email" />} />
  </div>
)

export const WithEndIcon: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '300px' }}>
    <TextField {...args} endIcon={<Icon label="Lock" />} />
  </div>
)

export const WithError: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: '300px' }}>
    <TextField
      error="Ops... something went wrong"
      {...args}
      startIcon={<Icon label="Email" />}
      label="E-mail"
      name="email"
    />
  </div>
)
