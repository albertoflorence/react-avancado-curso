import { useState } from 'react'
import { useClickOutside } from 'hooks'
import * as S from './DropdownStyles'

export interface DropDownProps {
  title: React.ReactNode
  children?: React.ReactNode
}

const DropDown = ({ title, children }: DropDownProps) => {
  const [open, setOpen] = useState(false)

  const domNode = useClickOutside<HTMLDivElement>(() => {
    setOpen(false)
  })

  return (
    <S.Wrapper ref={domNode}>
      <S.Title onClick={() => setOpen(state => !state)}>{title}</S.Title>
      <S.Content open={open} aria-hidden={!open}>
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default DropDown
