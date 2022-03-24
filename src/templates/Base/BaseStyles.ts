import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`

export const Content = styled.section`
  ${({ theme }) => css`
    flex: 1 0 auto;
    margin-top: ${theme.spacing(6)};
  `}
`

export const Footer = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(8)};
    background: ${theme.colors.lightBg};
    clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    padding-top: ${theme.spacing(7)};

    ${media.greaterThan('medium')`
    padding-top: ${theme.spacing(14)};
      clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
    `}
  `}
`
