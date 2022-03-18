import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps, LineColors } from './Heading'

const lines = {
  left: (theme: DefaultTheme, color: LineColors) => css`
    padding-left: ${theme.spacing(1)};
    border-left: 5px solid ${theme.colors[color]};
  `,
  bottom: (theme: DefaultTheme, color: LineColors) => css`
    position: relative;
    margin-bottom: 4px;

    &::after {
      position: absolute;
      left: 0;
      bottom: -4px;
      content: '';
      width: 1.8em;
      border-bottom: 4px solid ${theme.colors[color]};
    }
  `
}

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

const handleTextTransform = (type: HeadingProps['textTransform']) => css`
  text-transform: ${type};
`

export const Wrapper = styled.h2<HeadingProps>`
  ${({
    theme,
    color = 'white',
    line,
    lineColor = 'primary',
    size = 'medium',
    textTransform
  }) => css`
    color: ${theme.colors[color]};

    ${line && lines[line](theme, lineColor)}
    ${size && sizes[size](theme)}
    ${textTransform && handleTextTransform(textTransform)}
  `}
`
