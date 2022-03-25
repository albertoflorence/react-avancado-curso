import * as S from './OverlayStyles'

export interface OverlayProps {
  children?: React.ReactNode
  Icon: React.ReactNode
  open?: boolean
}

const Overlay = ({ children, Icon, open }: OverlayProps) => (
  <S.Wrapper open={open} aria-hidden={!open}>
    {Icon}
    {children}
  </S.Wrapper>
)

export default Overlay
