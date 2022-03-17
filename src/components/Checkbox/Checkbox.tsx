import { useState } from 'react'
import * as S from './CheckboxStyles'

export type CheckboxProps = {
  label?: string
  color?: 'black' | 'white'
  onCheck?: (status: boolean) => void
  defaultChecked?: boolean
} & React.ComponentPropsWithoutRef<'input'>

const Checkbox = ({ label, color, onCheck, defaultChecked = false, ...props }: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked)

  const onChange = (): void => {
    const status = !checked
    setChecked(status)
    if (onCheck) onCheck(status)
  }

  const Input = <S.Input onChange={onChange} type="checkbox" checked={checked} {...props} />

  return (
    <S.Wrapper>
      {!label && Input}
      {label && (
        <S.Label color={color}>
          {Input}
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
