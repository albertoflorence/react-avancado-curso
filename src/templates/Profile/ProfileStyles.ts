import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacing(4)};

    ${media.greaterThan('medium')`
      gap: ${theme.spacing(4)};
      grid-template-columns: minmax(180px, 350px) minmax(450px, 1fr);
      align-items: start;
    `}

    ${media.greaterThan('large')`
      gap: ${theme.spacing(8)};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacing(2)};
  `}
`
