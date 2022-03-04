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
  display: inline-flex;
  align-items: center;
  justify-content: center;

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

interface WrapperProps extends ButtonProps {
  hasIcon: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size = 'medium', fullWidth = false, hasIcon }) => css`
    background: ${theme.gradients.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacing(1)};
    cursor: pointer;

    ${size && sizes[size](theme)}
    ${fullWidth && handleFullWidth}
    ${hasIcon && handleIcon(theme)}

    &:hover {
      filter: brightness(95%);
    }
  `}
`
