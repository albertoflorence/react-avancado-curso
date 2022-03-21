import * as S from './GridStyles'

export interface GridProps {
  children: React.ReactNode
}

const Grid = ({ children }: GridProps) => <S.Wrapper>{children}</S.Wrapper>

export default Grid
