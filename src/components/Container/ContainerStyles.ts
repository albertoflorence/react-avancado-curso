import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ContainerProps } from './Container'

const handleMobileFullscreen = () => css`
  padding-left: 0;
  padding-right: 0;
`

const handleCenter = () => css`
  margin-right: auto;
  margin-left: auto;
`

export const Wrapper = styled.div<ContainerProps>`
  ${({ theme, mobileFullscreen, center }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    padding-left: calc(${theme.grid.gutter} * 2);
    padding-right: calc(${theme.grid.gutter} * 2);

    ${media.lessThan('medium')`
      padding-left: ${theme.grid.gutter} ;
      padding-right: ${theme.grid.gutter} ;
      ${mobileFullscreen && handleMobileFullscreen}
    `}

    ${center && handleCenter}
  `}
`
