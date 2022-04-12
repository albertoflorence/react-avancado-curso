import { useQuery } from '@apollo/client'
import { GameCardProps } from 'components/GameCard'
import { QueryWishlist } from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/react'
import { mapperGame } from './mappers'

interface UseGetWishlistResult {
  games: GameCardProps[]
  loading: boolean
}
export const useGetWishlist = (): UseGetWishlistResult => {
  const session = useSession()
  console.log('session: ', session)

  const { data, loading } = useQuery<QueryWishlist>(QUERY_WISHLIST, {
    skip: session.status === 'unauthenticated',
    context: { session }
  })

  console.log('data: ', data)

  return {
    games: data?.wishlist?.games.map(mapperGame) || [],
    loading
  }
}
