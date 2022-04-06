import Link from 'components/Link'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ImageBox = styled(Link)`
  min-height: 140px;
  height: 140px;
  background: #f6f7f8;
  position: relative;
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
    height: 130px;
    padding: ${theme.spacing(1, 2, 2, 2)};
    display: flex;
    flex-wrap: wrap;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    background-color: ${theme.colors.white};
  `}
`

export const Info = styled(Link)`
  width: calc(100% - 25px);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`
export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray2};
    font-weight: ${theme.font.normal};
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`
export const BuyBox = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  display: flex;
  justify-self: end;
  justify-content: space-around;
  align-items: flex-end;
  margin: 16px 0 0 auto;
  flex-wrap: wrap;

  button {
    height: 22px;
    border-radius: 2px;
  }
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary};
  `}
`
