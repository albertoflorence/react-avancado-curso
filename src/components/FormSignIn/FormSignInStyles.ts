import styled, { css } from 'styled-components'

export const ForgotPassword = styled.a`
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
