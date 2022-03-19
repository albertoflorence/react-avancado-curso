import styled, { css } from 'styled-components'

export const Footer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    align-self: stretch;
    padding-top: ${theme.spacing(14)};
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  `}
`
