import { FilterProps } from 'components/ExploreSidebar'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries'
import { initializeApollo } from 'utils/apollo'
import { normalizeGame } from './normalizer'
import filtersMock from 'components/ExploreSidebar/mock'
import { QueryGameBySlug, QueryGameBySlugVariables } from 'graphql/generated/QueryGameBySlug'
import { GameProps } from 'templates/Game'
import { Platform, Rating } from 'components/GameDetails'
import { getImageUrl, formatPrice } from 'utils/helpers'
import { GameCardProps } from 'components/GameCard'
import { ApolloError, useQuery } from '@apollo/client'

export const getFilters = (): FilterProps[] => filtersMock as FilterProps[]

export const getGames = async (): Promise<GameCardProps[]> => {
  const client = initializeApollo()

  const { data } = await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 12
    }
  })

  return data.games.map(normalizeGame)
}

export interface UseGetGamesResult {
  data?: GameCardProps[]
  loading: boolean
  error?: ApolloError
  fetchMore: ({ variables }: { variables: QueryGamesVariables }) => void
}

export const useGetGames = (options: QueryGamesVariables): UseGetGamesResult => {
  const { data, loading, error, fetchMore } = useQuery<QueryGames, QueryGamesVariables>(
    QUERY_GAMES,
    {
      variables: options
    }
  )

  return {
    data: data?.games.map(normalizeGame),
    loading,
    error,
    fetchMore
  }
}

export const getGameBySlug = async (slug: string): Promise<GameProps | undefined> => {
  const client = initializeApollo()
  const { data } = await client.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug }
  })

  if (!data.games.length) {
    return
  }

  const game = data.games[0]

  return {
    cover: getImageUrl(game.cover?.url),
    gameInfo: {
      title: game.name,
      price: formatPrice(game.price),
      description: game.short_description
    },
    gallery: {
      items: game.gallery.map(image => ({
        src: getImageUrl(image.url),
        alt: image.alternativeText || ''
      }))
    },
    description: game.description,
    gameDetails: {
      developer: game.developers[0].name,
      publisher: game.publisher?.name || '',
      platforms: game.platforms.map(item => item.name as Platform),
      releaseDate: game.release_date,
      rating: game.rating as Rating,
      genres: game.categories.map(item => item.name)
    }
  }
}
