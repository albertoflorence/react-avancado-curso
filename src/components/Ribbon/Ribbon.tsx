import * as S from './RibbonStyles'

export interface RibbonProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
  size?: 'small' | 'normal'
}

const Ribbon = ({ children, ...props }: RibbonProps) => <S.Wrapper {...props}>{children}</S.Wrapper>

export default Ribbon
