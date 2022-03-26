import { useState } from 'react'
import * as S from './DropdownStyles'

export interface DropDownProps {
  title: React.ReactNode
  children?: React.ReactNode
}

const DropDown = ({ title, children }: DropDownProps) => {
  const [open, setOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Title onClick={() => setOpen(!open)}>{title}</S.Title>
      <S.Content open={open} aria-hidden={!open}>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default DropDown
