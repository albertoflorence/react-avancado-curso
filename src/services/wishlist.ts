import { useMutation, useQuery } from '@apollo/client'
import { GameCardProps } from 'components/GameCard'
import {
  MutationUpdateWishlist,
  MutationUpdateWishlistVariables
} from 'graphql/generated/MutationUpdateWishlist'
import { QueryWishlist } from 'graphql/generated/QueryWishlist'
import { MUTATION_UPDATE_WISHLIST } from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/react'
import { useMemo } from 'react'
import { mapperGame } from './mappers'

type UpdateWishlistResult = [(ids: string[]) => void, { loading: boolean }]

export const useUpdateWishlist = (
  onCompleted: (data: GameCardProps[]) => void
): UpdateWishlistResult => {
  const session = useSession()

  const [callback, { loading }] = useMutation<
    MutationUpdateWishlist,
    MutationUpdateWishlistVariables
  >(MUTATION_UPDATE_WISHLIST, {
    onCompleted: data => {
      onCompleted(data.updateWishlist?.wishlist?.games.map(mapperGame) || [])
    }
  })

  const updateWishlist = (gameIds: string[]) =>
    callback({ context: { session }, variables: { input: { data: { games: gameIds } } } })

  return [updateWishlist, { loading }]
}

interface GetWishListResult {
  games: GameCardProps[]
  loading: boolean
}

export const useGetWishlist = (): GetWishListResult => {
  const session = useSession()

  const { data, loading } = useQuery<QueryWishlist>(QUERY_WISHLIST, {
    skip: session.status === 'unauthenticated',
    context: { session }
  })

  const mapped = useMemo(() => data?.wishlist?.games.map(mapperGame) || [], [data])

  return {
    games: mapped,
    loading
  }
}
