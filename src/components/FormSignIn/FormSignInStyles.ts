import styled, { css } from 'styled-components'
import * as TextFieldStyles from 'components/TextField/TextFieldStyles'
import * as ButtonStyles from 'components/Button/ButtonStyles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin-bottom: ${theme.spacing(1)};
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacing(4, 'auto', 2)};
    }
  `}
`

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

export const FormLink = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    text-align: center;
    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 1px solid ${theme.colors.secondary};

      &:hover {
        filter: brightness(90%);
      }
    }
  `}
`
