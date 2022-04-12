import { gql } from '@apollo/client'
import { GameFragment } from '../fragments/game'

export const MUTATION_UPDATE_WISHLIST = gql`
  mutation MutationUpdateWishlist($input: updateWishlistInput!) {
    updateWishlist(input: $input) {
      wishlist {
        games {
          ...GameFragment
        }
      }
    }
  }
  ${GameFragment}
`
