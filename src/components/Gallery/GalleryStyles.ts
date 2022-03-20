import styled, { css } from 'styled-components'
import { ModalProps } from './Gallery'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-slide > div {
      margin-right: ${theme.spacing(2)};
      height: 100%;
      cursor: pointer;
      > img {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }

    .slick-next,
    .slick-prev {
      color: ${theme.colors.white};
      position: absolute;
      width: 24px;
      height: 24px;
      top: 50%;
      transform: translateY(-50%);
      align-items: center;
      padding: 0;
      cursor: pointer;
    }

    .slick-next {
      right: -30px;
    }
    .slick-prev {
      left: -40px;
    }
    .slick-disabled {
      visibility: hidden !important;
    }
  `}
`

export const Content = styled.div`
  width: min(1200px, 100%);
  max-height: 800px;
`

export const Modal = styled.div<ModalProps>`
  ${({ theme, open }) => css`
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'all' : 'none'};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: ${theme.layers.modal};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity ${theme.transition.default};

    svg {
      width: 40px;
      height: 40px;
      position: absolute;
      top: ${theme.spacing(2)};
      right: ${theme.spacing(2)};
      color: ${theme.colors.white};
      cursor: pointer;
    }
  `}
`
