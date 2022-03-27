import { IconStyles } from 'components/Icon'
import styled, { css } from 'styled-components'
import { OverlayProps } from './Overlay'

export const Wrapper = styled.nav<Pick<OverlayProps, 'open'>>`
  ${({ theme, open }) => css`
    background: ${theme.colors.white};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'all' : 'none'};
    transition: opacity ${theme.transition.default};
    z-index: ${theme.layers.modal};

    > ${IconStyles.Wrapper} {
      position: absolute;
      z-index: ${theme.layers.base};
      top: 0;
      right: 0;
      margin: ${theme.spacing(2)};
      cursor: pointer;
    }

    > * {
      transform: ${open ? 'translateY())' : 'translateY(50px)'};
      transition: transform ${theme.transition.default};
    }
  `}
`
