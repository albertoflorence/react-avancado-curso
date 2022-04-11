import Link from 'components/Link'
import styled, { css } from 'styled-components'

export const ForgotPassword = styled(Link)`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      filter: opacity(0.8);
    }
  `}
`
