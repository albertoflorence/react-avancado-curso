import styled, { css } from 'styled-components'
import media from 'styled-media-query'
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

const handleHideOnMobile = () => css`
  ${media.lessThan('medium')`
width: 58px;
height: 45px;

svg {
  height: 45px;
  pointer-events: none;
}

.text {
  display: none
}
`}
`

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color = 'white', size = 'normal', hideOnMobile = false }) => css`
    color: ${theme.colors[color]};
    ${sizes[size]}
    ${hideOnMobile && handleHideOnMobile}
  `}
`
