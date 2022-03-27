import styled, { css, DefaultTheme } from 'styled-components'
import { EmptyProps } from './Empty'

const sizes = {
  small: (theme: DefaultTheme) => css`
    ${Title} {
      font-size: ${theme.font.sizes.large};
    }
    ${Description} {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.black};
    }
    img {
      width: 300px !important;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    ${Title} {
      font-size: ${theme.font.sizes.xxlarge};
    }
    ${Description} {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray2};
    }
  `
}

export const Wrapper = styled.div<Pick<EmptyProps, 'size'>>`
  ${({ theme, size = 'normal' }) => css`
    text-align: center;
    p:last-child {
      margin-bottom: 0;
    }
    ${sizes[size](theme)}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacing(4)};
  `}
`
