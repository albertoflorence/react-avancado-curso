import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacing(4)};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    nav {
      display: flex;
      flex-direction: column;
      a,
      span {
        text-decoration: none;
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
        margin-top: ${theme.spacing(0.5)};
      }
      a:hover {
        text-decoration: underline;
      }
    }
  `}
`

export const CopyRightWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(6)};
    margin-bottom: ${theme.spacing(4)};
    text-align: center;
  `}
`
