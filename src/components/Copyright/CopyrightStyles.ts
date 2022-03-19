import styled, { css } from 'styled-components'
import { CopyrightProps } from './Copyright'

export const Wrapper = styled.div<CopyrightProps>`
  ${({ theme, color = 'gray' }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(4)};
    text-align: center;
  `}
`
