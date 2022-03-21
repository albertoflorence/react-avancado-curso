import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/HeadingStyles'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      background: ${theme.colors.lightBg};
      padding: ${theme.spacing(4)};
      color: ${theme.colors.black}
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacing(2, 0)};
      ${HeadingStyles.lines.left(theme, 'secondary')}
      ${media.greaterThan('medium')`
        color: ${theme.colors.black};
      `};
    }

    p {
      margin-bottom: ${theme.spacing(2)};
    }

    a {
      color: ${theme.colors.primary};
    }

    img {
      max-width: min(700px, 100%);
      margin-bottom: ${theme.spacing(2)};
    }

    ul,
    ol {
      padding: ${theme.spacing(2, 3)};
    }

    hr {
      margin: ${theme.spacing(3, 0)};
    }

    video {
      max-width: min(700px, 100%);
    }
  `}
`
