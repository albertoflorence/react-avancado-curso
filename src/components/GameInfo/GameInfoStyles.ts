import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing(4)};
    position: relative;
    > h2 {
      width: 75%;
    }

    ${PriceWrapper} {
      position: absolute;
      right: ${theme.spacing(4)};
      top: ${theme.spacing(4)};
    }

    ${media.lessThan('medium')`
      ${PriceWrapper} {
        right: -${theme.spacing(1)};
        margin-left: ${theme.spacing(3)};
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing(2)};
    ${media.lessThan('medium')`
      flex-direction: column-reverse;
      > button {
        width: 100%;
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    width: 70%;
    margin: ${theme.spacing(2, 0)};
  `}
`

const handleDiscount = (theme: DefaultTheme) => css`
  text-decoration: line-through;
  background: none;
  color: ${theme.colors.gray3};
  margin-right: 5px;
`
type HasDiscount = {
  discount?: boolean
}

export const PriceWrapper = styled.span<HasDiscount>`
  ${({ theme, discount }) => css`
    background: ${theme.colors.secondary};
    border-radius: 2px;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing(0, 1.5)};
    font-weight: ${theme.font.bold};

    ${discount && handleDiscount(theme)}
  `}
`
