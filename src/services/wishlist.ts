import { QueryHookOptions, useQuery } from '@apollo/client'
import { QueryWishlist, QueryWishlistVariables } from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export const useGetWishlist = (
  options: QueryHookOptions<QueryWishlist, QueryWishlistVariables>
) => {
  return useQuery(QUERY_WISHLIST, options)
}
