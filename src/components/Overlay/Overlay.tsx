import * as S from './OverlayStyles'

export interface OverlayProps {
  children?: React.ReactNode
  icon: React.ReactNode
  open?: boolean
}

const Overlay = ({ children, icon, open }: OverlayProps) => (
  <S.Wrapper open={open} aria-hidden={!open}>
    {icon}
    {children}
  </S.Wrapper>
)

export default Overlay
