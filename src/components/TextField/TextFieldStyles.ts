import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './TextField'

const handleDisable = (theme: DefaultTheme) => css`
  ${Label},
  ${Input} {
    color: ${theme.colors.gray};
    cursor: not-allowed;

    &::placeholder {
      color: currentColor;
    }
  }
`

const handleError = (theme: DefaultTheme) => css`
  ${InputWrapper} {
    border-color: ${theme.colors.red};
  }

  ${Label},
  ${InputWrapper} svg {
    color: ${theme.colors.red};
  }
`

export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled' | 'error'>>`
  ${({ theme, disabled, error }) => css`
    ${disabled && handleDisable(theme)}
    ${error && handleError(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.small};
  `}
`
export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border-radius: 2px;
    border: 0.2px solid ${theme.colors.lightGray};
    padding: ${theme.spacing(0, 2)};
    display: inline-flex;
    align-items: center;
    gap: ${theme.spacing(1)};

    &:focus-within {
      box-shadow: 0 0 5px ${theme.colors.primary};
    }

    svg {
      width: 22px;
      height: 22px;
      color: ${theme.colors.gray};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    padding: ${theme.spacing(1, 0)};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    border: none;
    outline: none;
    background: transparent;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.red};
    font-weight: ${theme.font.light};
  `}
`
