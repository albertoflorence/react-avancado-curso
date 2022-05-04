import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import * as PriceStyles from 'components/Price/PriceStyles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing(4)};
    position: relative;
    > h2 {
      width: 75%;
    }

    ${media.lessThan('medium')`
      padding: ${theme.spacing(4, 3, 2)};
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing(2)};
    ${media.lessThan('medium')`
      margin-top: ${theme.spacing(5)};
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

interface PriceBoxProps {
  discount?: boolean
}
const handleDiscount = (theme: DefaultTheme) => css`
  > :first-child {
    text-decoration: line-through;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray3};
    text-align: center;
  }
`
export const PriceBox = styled.div<PriceBoxProps>`
  ${({ theme, discount }) => css`
    position: absolute;

    right: ${theme.spacing(4)};
    top: ${theme.spacing(1.5)};

    ${discount && handleDiscount(theme)}

    ${media.lessThan('medium')`
      right: -${theme.spacing(1)};
      margin-left: ${theme.spacing(3)};
      ${PriceStyles.Wrapper} {
        font-size: ${theme.font.sizes.large};
      }
    `}
  `}
`
