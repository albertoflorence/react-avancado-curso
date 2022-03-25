import styled, { css } from 'styled-components'
import { OverlayProps } from './Overlay'

export const Wrapper = styled.div<Pick<OverlayProps, 'open'>>`
  ${({ theme, open }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    overflow: hidden;
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'all' : 'none'};
    transition: opacity ${theme.transition.default};
    z-index: ${theme.layers.modal};
  `}
`
