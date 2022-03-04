import { DefaultTheme } from 'styled-components'
import * as S from './MediaMatchStyles'

export type Breakpoint = keyof DefaultTheme['breakpoints']

export interface MediaMatchProps {
  children: React.ReactNode
  greaterThan?: Breakpoint
  lessThan?: Breakpoint
}

const MediaMatch = ({ children, ...props }: MediaMatchProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default MediaMatch
