import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments'

export const QUERY_WISHLIST = gql`
  query QueryWishlist($email: String!) {
    wishlists(where: { user: { email: $email } }) {
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
