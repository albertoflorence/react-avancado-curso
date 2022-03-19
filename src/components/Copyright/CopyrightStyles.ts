import styled, { css } from 'styled-components'
import { CopyrightProps } from './Copyright'

export const Wrapper = styled.span<CopyrightProps>`
  ${({ theme, color = 'gray' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
