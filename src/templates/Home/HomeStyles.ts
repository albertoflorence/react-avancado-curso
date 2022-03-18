import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as HeadingStyles from 'components/Heading/HeadingStyles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(6)};
    width: 100%;
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-bottom: calc(-${theme.grid.gutter} * 4);
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.section`
  ${({ theme }) => css`
    align-self: stretch;

    ${media.greaterThan('medium')`
    padding-top: ${theme.spacing(18)};
    padding-bottom: ${theme.spacing(14)};
    margin-bottom: -${theme.spacing(7)};
    background: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black}
      }
    `};
  `}
`

export const Footer = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    align-self: stretch;
    padding-top: ${theme.spacing(14)};
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  `}
`
