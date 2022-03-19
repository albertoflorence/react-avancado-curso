import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacing(4)};
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing(4)};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.greaterThan('large')`
      grid-template-columns: repeat(6, 1fr);
    `};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colors.gray2};
      font-weight: ${theme.font.light};
      font-size: ${theme.font.sizes.small};
    }
    span {
      color: ${theme.colors.white};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.medium};
      svg {
        margin-right: ${theme.spacing(1)};
      }
    }
  `}
`
