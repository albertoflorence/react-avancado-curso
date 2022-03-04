import * as S from './HeadingStyles'

export type LineColors = 'primary' | 'secondary'

export interface HeadingProps {
  children: React.ReactNode
  color?: 'white' | 'black'
  line?: 'left' | 'bottom'
  lineColor?: LineColors
}

const Heading = ({ children, ...props }: HeadingProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Heading
