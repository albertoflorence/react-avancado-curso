import { ReactNode } from 'react'
import * as S from './ContainerStyles'

export interface ContainerProps {
  children?: ReactNode
  mobileFullscreen?: boolean
}

const Container = ({ children, ...props }: ContainerProps) => (
  <S.Wrapper {...props}>{children}</S.Wrapper>
)

export default Container
