import Icon from 'components/Icon'
import * as S from './OverlayStyles'

export interface OverlayProps {
  children?: React.ReactNode
  open?: boolean
  handleClose?: () => void
}

const Overlay = ({ children, open, handleClose }: OverlayProps) => (
  <S.Wrapper open={open} aria-hidden={!open}>
    <Icon label="Close" aria-label="Close Overlay" color="black" size={25} onClick={handleClose} />
    {children}
  </S.Wrapper>
)

export default Overlay
