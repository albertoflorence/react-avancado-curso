import { gql } from '@apollo/client'
import { HighlightFragment } from './highlight'

export const SectionFragment = gql`
  fragment SectionFragment on ComponentPageSection {
    title
    highlight {
      ...HighlightFragment
    }
  }
  ${HighlightFragment}
`
