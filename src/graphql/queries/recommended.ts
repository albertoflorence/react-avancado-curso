import { gql } from '@apollo/client'
import { GameFragment, HighlightFragment } from 'graphql/fragments'

export const QUERY_RECOMMENDED = gql`
  query QueryRecommended {
    recommended {
      section {
        title
        highlight {
          ...HighlightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }
  ${HighlightFragment}
  ${GameFragment}
`
