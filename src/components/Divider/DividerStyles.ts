import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.hr`
  ${({ theme }) => css`
    background: rgba(181, 181, 181, 0.3);
    margin: ${theme.spacing(7, 'auto', 4)};
    height: 1px;
    border: 0;
    width: 100%;

    ${media.greaterThan('medium')`
      margin: ${theme.spacing(17, 'auto', 7)}
    `}
  `}
`
