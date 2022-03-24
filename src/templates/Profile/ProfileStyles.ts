import Container from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container)``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin-top: ${theme.spacing(4)};
    ${media.greaterThan('medium')`
      gap: ${theme.spacing(8)};
      grid-template-columns: 320px 1fr;
      align-items: start;
    `}
  `}
`
