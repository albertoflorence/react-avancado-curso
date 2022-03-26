import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;
    color: ${theme.colors.white};
  `}
`

const handleOpen = () => css`
  opacity: 1;
  transform: translateY(0);
`

export const Content = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    position: absolute;
    margin-top: ${theme.spacing(2)};
    right: 0;
    &::before {
      content: '';
      width: 24px;
      height: 24px;
      top: -24px;
      position: absolute;
      right: ${theme.spacing(2)};
      background: ${theme.colors.white};
      clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
    }

    opacity: 0;
    transform: translateY(5px);
    transition: opacity, transform, ${theme.transition.default};
    ${open && handleOpen}
  `}
`
