import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments'

export const QUERY_ORDERS = gql`
  query QueryOrders($id: Int!) {
    orders(where: { user: $id }) {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
