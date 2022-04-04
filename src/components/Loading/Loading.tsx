import * as S from './LoadingStyles'

export type Color = 'primary' | 'secondary'

export interface LoadingProps {
  type: 'linear'
  color?: Color
}

const Loading = (props: LoadingProps) => <S.Wrapper {...props} aria-label="loading"></S.Wrapper>

export default Loading
