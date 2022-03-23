import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    > :last-child {
      align-self: flex-end;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacing(4, 0)};
    gap: ${theme.spacing(2)};
    ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing(4)};
    `};
  `}
`
