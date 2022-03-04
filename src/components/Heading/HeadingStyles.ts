import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from './Heading'

const lines = {
  left: (theme: DefaultTheme, color: LineColors) => css`
    padding-left: ${theme.spacing(1)};
    border-left: 5px solid ${theme.colors[color]};
  `,
  bottom: (theme: DefaultTheme, color: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacing(1.5)};

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

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color = 'white', line, lineColor = 'primary' }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color]};
    ${line && lines[line](theme, lineColor)}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
