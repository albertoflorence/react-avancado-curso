import { useState } from 'react'
import * as S from './TextFieldStyles'

export type TextFieldProps = {
  label?: string
  onInput?: (value: string) => void
  initialValue?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
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
  name,
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
        id={id || name}
        type="text"
        onChange={onChange}
        value={value}
        disabled={disabled}
        name={name}
        {...props}
      />
      {endIcon && endIcon}
    </S.InputWrapper>
  )
  return (
    <S.Wrapper disabled={disabled} error={error}>
      {label ? (
        <S.Label htmlFor={id}>
          {label}
          {Input}
        </S.Label>
      ) : (
        Input
      )}
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
