import styled, { css } from 'styled-components'
import * as LogoStyles from 'components/Logo/LogoStyles'
import * as Heading from 'components/Heading/HeadingStyles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: ${theme.spacing(7, 7, 4)};
    z-index: ${theme.layers.base};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacing(1)};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`
export const Footer = styled.p`
  color: white;
  align-self: center;
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 360px;

    ${media.lessThan('medium')`
      width: 300px;
    `}

    ${LogoStyles.Wrapper} {
      margin: ${theme.spacing(0, 'auto', 8)};
    }

    ${Heading.Wrapper} {
      margin-bottom: ${theme.spacing(4)};
    }
  `}
`
