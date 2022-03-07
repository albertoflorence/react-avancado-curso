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

const handleIcon = (theme: DefaultTheme) => css`
  svg {
    width: 1em;
    & + span {
      margin-left: ${theme.spacing(1)};
    }
  }

  span + svg {
    margin-left: ${theme.spacing(1)};
  }
`

type WrapperProps = {
  hasIcon: boolean
} & ButtonProps

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size = 'medium', fullWidth = false, hasIcon }) => css`
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

    ${size && sizes[size](theme)}
    ${fullWidth && handleFullWidth}
    ${hasIcon && handleIcon(theme)}

    &:hover {
      filter: brightness(95%);
    }
  `}
`
