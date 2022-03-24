import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    > :last-child {
      align-self: flex-end;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacing(4, 0, 8)};
    gap: ${theme.spacing(2)};
    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing(4)};
      margin-bottom: ${theme.spacing(4)}
    `};
  `}
`
