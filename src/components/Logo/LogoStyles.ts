import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color = 'white' }) => css`
    color: ${theme.colors[color]};
  `}
`
