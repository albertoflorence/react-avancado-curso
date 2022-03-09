import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 300px;
`

export const ImageBox = styled.div`
  height: 140px;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 140px;
  animation: placeholderShimmer 1s linear infinite forwards;
  img {
    width: 100%;
    height: 140px;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -400px 0;
    }

    100% {
      background-position: 400px 0;
    }
  }
`
export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100px;
    padding: ${theme.spacing(1, 2, 2, 2)};
    display: flex;
    flex-wrap: wrap;
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    background-color: ${theme.colors.white};
  `}
`

export const Info = styled.div`
  width: calc(100% - 25px);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
  `}
`
export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray2};
    font-weight: ${theme.font.normal};
  `}
`

export const BuyBox = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 3px;
  margin: auto 0 0 auto;
  button {
    height: 22px;
    border-radius: 2px;
  }
`

interface HasDiscount {
  discount?: boolean
}
const handleDiscount = (theme: DefaultTheme) => css`
  text-decoration: line-through;
  background: none;
  color: ${theme.colors.gray3};
`
export const Price = styled.span<HasDiscount>`
  ${({ theme, discount }) => css`
    height: 22px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacing(0, 1.5)};
    font-weight: ${theme.font.bold};

    ${discount && handleDiscount(theme)}
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary};
  `}
`
