import styled, { css, DefaultTheme } from 'styled-components'
import { Color, IconProps } from './Icon'

const handleColor = (theme: DefaultTheme, color: Color) => css`
  color: ${theme.colors[color]};
`

export const Wrapper = styled.span<Omit<IconProps, 'label'>>`
  ${({ theme, color }) => css`
    position: relative;
    ${color && handleColor(theme, color)};
  `}
`

export const BadgeWrapper = styled.span`
  ${({ theme }) => css`
    position: absolute;
    color: white;
    background: ${theme.colors.secondary};
    border-radius: 100%;
    font-size: 0.5rem;
    font-weight: ${theme.font.bold};
    top: -7px;
    right: -7px;
    width: 18px;
    height: 18px;
    line-height: 19px;
    text-align: center;
  `}
`
