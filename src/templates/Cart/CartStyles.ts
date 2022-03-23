import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)};
    display: grid;

    gap: ${theme.spacing(3)};
    align-items: flex-start;
    ${media.greaterThan('large')`
      grid-template-columns: 2fr 360px;
    `}
  `}
`
