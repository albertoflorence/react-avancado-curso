import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments'

export const QUERY_WISHLIST = gql`
  query QueryWishlist {
    wishlist(id: 0) {
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
