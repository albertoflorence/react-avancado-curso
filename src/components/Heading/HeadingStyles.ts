import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps, LineColors } from './Heading'

const lines = {
  left: (theme: DefaultTheme, color: LineColors) => css`
    padding-left: ${theme.spacing(1)};
    border-left: 5px solid ${theme.colors[color]};
  `,
  bottom: (theme: DefaultTheme, color: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacing(1)};

    &::after {
      position: absolute;
      left: 0;
      bottom: -10px;
      content: '';
      width: 2em;
      border-bottom: 5px solid ${theme.colors[color]};
    }
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color = 'white', line, lineColor = 'primary', size = 'medium' }) => css`
    color: ${theme.colors[color]};

    ${line && lines[line](theme, lineColor)}
    ${size && sizes[size](theme)}
  `}
`
