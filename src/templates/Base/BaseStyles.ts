import styled, { css } from 'styled-components'
import * as MenuStyles from 'components/Menu/MenuStyles'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${MenuStyles.Wrapper} {
      margin-bottom: ${theme.spacing(7)};
    }
  `}
`

export const Footer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    align-self: stretch;
    padding-top: ${theme.spacing(14)};
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  `}
`
