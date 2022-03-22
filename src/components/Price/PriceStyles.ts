import styled, { css, DefaultTheme } from 'styled-components'
import { PriceProps } from './Price'

const handleDiscount = (theme: DefaultTheme) => css`
  text-decoration: line-through;
  background: none;
  color: ${theme.colors.gray3};
  margin-right: 5px;
`

export const Wrapper = styled.span<PriceProps>`
  ${({ theme, discount, light }) => css`
    background: ${theme.colors.secondary};
    border-radius: 2px;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing(0.2, 1.5)};
    font-weight: ${theme.font[light ? 'light' : 'bold']};

    ${discount && handleDiscount(theme)}
  `}
`
