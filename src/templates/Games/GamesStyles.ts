import Container from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 240px 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

interface HasLoading {
  isLoading: boolean
}

export const Content = styled.div<HasLoading>`
  ${({ isLoading }) => css`
    position: relative;
    ${isLoading &&
    css`
      pointer-events: none;
      color: white;
      opacity: 0.5;
    `}
  `}
`

export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: white;
    text-align: center;
    margin-top: ${theme.spacing(8)};
    height: 80px;

    > span {
      cursor: pointer;
      text-transform: uppercase;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border: 3px solid ${theme.colors.primary};
        border-left-color: transparent;
        border-top-color: transparent;
        top: 80%;
        right: 50%;
        transform: rotate(45deg) translate(50%);
      }
    }
  `}
`
