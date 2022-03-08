import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from './Highlight'

const handleReverse = () => css`
  grid-template-areas: 'content image';
  grid-template-columns: minmax(1fr, auto) 1fr;
  ${Content} {
    text-align: left;
  }
  ${Image} {
    justify-self: end;
  }
`

export const Wrapper = styled.section<Pick<HighlightProps, 'reverse'>>`
  ${({ reverse }) => css`
    position: relative;
    display: grid;
    height: 230px;
    grid-template-areas: 'image content';
    grid-template-columns: 1fr minmax(1fr, auto);

    ${media.greaterThan('medium')`
      height: 320px;
    `}
    &::after {
      content: '';
      position absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }
    ${reverse && handleReverse}
  `}
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`
export const Image = styled.img`
  ${({ theme }) => css`
    grid-area: image;
    max-height: 230px;
    max-width: 100%;
    z-index: ${theme.layers.base};
    align-self: end;

    ${media.greaterThan('medium')`
      max-height: 320px;
    `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    grid-area: content;
    color: ${theme.colors.white};
    text-align: end;
    padding: ${theme.spacing(2)};
    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacing(6)}
    `}
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacing(4)};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
