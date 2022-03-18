import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as HighlightStyles from 'components/Highlight/HighlightStyles'

export const Section = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(4)};
    ${media.lessThan('medium')`
      ${HighlightStyles.Wrapper} {
        margin: 0 -${theme.grid.gutter};
      }
    `}
  `}
`
