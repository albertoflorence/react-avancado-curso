import styled, { css } from 'styled-components'
import { IconProps } from './Icon'

export const Wrapper = styled.span<Omit<IconProps, 'label'>>`
  ${({ theme, color = 'white' }) => css`
    position: relative;
    > svg {
      color: ${theme.colors[color]};
    }
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
