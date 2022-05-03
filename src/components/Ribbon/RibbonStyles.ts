import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonProps } from './Ribbon'

const sizes = {
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing(0, 3)};
    height: 36px;
    right: -20px;

    &::before {
      border-top-width: 10px;
      border-right-width: 20px;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 26px;
    padding: ${theme.spacing(0, 2)};
    right: -12px;

    &::before {
      border-top-width: 7px;
      border-right-width: 12px;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color = 'primary', size = 'normal' }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
    background-color: ${theme.colors[color]};
    font-weight: ${theme.font.bold};
    display: flex;
    align-items: center;
    top: 5%;
    ${sizes[size](theme)}

    &::before {
      content: '';

      position: absolute;
      right: 0;
      top: 100%;
      border-style: solid;
      border-left-color: ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
      border-right-color: transparent;
      border-bottom-color: transparent;
      filter: brightness(70%);
      border-left-width: 0em;
    }
  `}
`
