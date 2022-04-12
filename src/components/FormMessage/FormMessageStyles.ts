import styled, { css, DefaultTheme } from 'styled-components'
import { FormMessageProps } from './FormMessage'

const types = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
  `,
  success: (theme: DefaultTheme) => css`
    color: ${theme.colors.green};
  `
}

export const Wrapper = styled.div<FormMessageProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.font.sizes.small};
    ${type && types[type](theme)}
    display: flex;
    gap: ${theme.spacing(0.5)};
    justify-content: center;
    padding: ${theme.spacing(0.5)};
  `}
`
