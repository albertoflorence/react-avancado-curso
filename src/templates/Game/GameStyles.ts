import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Container from 'components/Container'

export const Wrapper = styled(Container).attrs({ center: true })`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(6)};
    margin-top: ${theme.spacing(23)};

    ${media.greaterThan('medium')`
      gap: ${theme.spacing(12)};
      margin-top: ${theme.spacing(48)};
    `}

    .description__copyrights {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacing(4)};
    }
  `}
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  opacity: 0.4;

  ${media.greaterThan('medium')`
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    height: 700px;
  `}
`
