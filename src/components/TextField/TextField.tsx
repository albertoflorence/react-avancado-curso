import { useState } from 'react'
import * as S from './TextFieldStyles'

export type TextFieldProps = {
  label?: string
  onInput?: (value: string) => void
  initialValue?: string
  id?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  disabled?: boolean
  error?: string
} & React.ComponentPropsWithoutRef<'input'>

const TextField = ({
  label,
  id,
  onInput,
  initialValue = '',
  startIcon,
  endIcon,
  disabled,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const newValue = event.currentTarget.value
    setValue(newValue)
    onInput && onInput(newValue)
  }

  const Input = (
    <S.InputWrapper>
      {startIcon && startIcon}
      <S.Input
        id={id}
        type="text"
        onChange={onChange}
        value={value}
        {...props}
        disabled={disabled}
      />
      {endIcon && endIcon}
    </S.InputWrapper>
  )
  return (
    <S.Wrapper disabled={disabled} error={error}>
      {!label && Input}
      {label && (
        <S.Label htmlFor={id}>
          {label}
          {Input}
        </S.Label>
      )}
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
