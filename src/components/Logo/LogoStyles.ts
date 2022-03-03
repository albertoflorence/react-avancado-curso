import styled, { css } from 'styled-components'
import { LogoProps } from './Logo'

const sizes = {
  normal: () => css`
    width: 110px;
    height: 33px;
  `,
  large: () => css`
    width: 200px;
    height: 59px;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color = 'white', size = 'normal' }) => css`
    color: ${theme.colors[color]};
    ${sizes[size]}
  `}
`
