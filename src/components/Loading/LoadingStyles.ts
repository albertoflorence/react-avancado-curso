import styled, { css, DefaultTheme } from 'styled-components'
import { LoadingProps, Color } from './Loading'

const types = {
  linear: (theme: DefaultTheme, color: Color) => css`
    width: 100%;
    height: 3px;
    position: relative;
    overflow: hidden;
    background-color: ${theme.colors.white};
    border-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      left: -50%;
      height: 3px;
      width: 40%;
      background-color: ${theme.colors[color]};
      animation: lineAnim 1s linear infinite;
      border-radius: 20px;

      @keyframes lineAnim {
        0% {
          left: -40%;
        }
        50% {
          left: 20%;
          width: 80%;
        }
        100% {
          left: 100%;
          width: 100%;
        }
      }
    }
  `
}

export const Wrapper = styled.div<LoadingProps>`
  ${({ theme, type, color = 'primary' }) => css`
    ${types[type](theme, color)}
  `}
`
