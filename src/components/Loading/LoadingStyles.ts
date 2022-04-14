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
  `,
  dots: (theme: DefaultTheme, color: Color) => css`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      top: 33px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: ${theme.colors[color]};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
  `,
  circular: () => css``
}

export const Wrapper = styled.div<LoadingProps>`
  ${({ theme, type, color = 'primary' }) => css`
    ${types[type](theme, color)}
  `}
`
