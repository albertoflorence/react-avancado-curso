import styled, { css } from 'styled-components'
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

    ${PriceStyles.Wrapper} {
      position: absolute;
      right: ${theme.spacing(4)};
      top: ${theme.spacing(4)};
    }

    ${media.lessThan('medium')`
      padding: ${theme.spacing(4, 3)};
      ${PriceStyles.Wrapper} {
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
