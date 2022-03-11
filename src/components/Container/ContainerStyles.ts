import styled, { css } from 'styled-components'
import { ContainerProps } from './Container'

export const Wrapper = styled.div<ContainerProps>`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter}, 2);
    padding-right: calc(${theme.grid.gutter}, 2);
  `}
`
