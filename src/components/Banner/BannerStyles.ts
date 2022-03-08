import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as Ribbon from 'components/Ribbon/RibbonStyles'

export const Wrapper = styled.div`
  position: relative;
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);

  `}
  ${media.lessThan('large')`
    ${Ribbon.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}
`
interface ImageProps {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 230px;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
      height: 580px;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacing(3)};
    width: 100%;

    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacing(5)};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacing(2)};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large}
    `}
  `}
`
