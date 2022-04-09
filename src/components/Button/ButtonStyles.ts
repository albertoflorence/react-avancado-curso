import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

const sizes = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacing(1, 4)};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacing(1, 6)};
  `
}

const handleFullWidth = () => css`
  width: 100%;
`

const handleIcon = () => css`
  svg {
    width: 1em;
  }
`

const handleText = (theme: DefaultTheme) => css`
  background: none;
  color: ${theme.colors.primary};
`

type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size = 'medium', fullWidth = false, hasIcon, text, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.gradients.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacing(1)};
    cursor: pointer;
    text-decoration: none;
    font-weight: ${theme.font.normal};
    height: 2.5em;
    gap: ${theme.spacing(1)};

    ${size && sizes[size](theme)}
    ${fullWidth && handleFullWidth}
    ${hasIcon && handleIcon}
    ${text && handleText(theme)}

    &:hover {
      filter: brightness(95%);
    }
    ${disabled &&
    css`
      filter: saturate(20%);
      pointer-events: none;
    `}
  `}
`
