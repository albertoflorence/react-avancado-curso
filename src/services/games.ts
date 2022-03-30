import { FilterProps } from 'components/ExploreSidebar'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries'
import { initializeApollo } from 'utils/apollo'
import { normalizeGame } from './normalizer'
import filtersMock from 'components/ExploreSidebar/mock'
import { QueryGameBySlug, QueryGameBySlugVariables } from 'graphql/generated/QueryGameBySlug'
import { GameTemplateProps } from 'templates/Game'
import { Platform, Rating } from 'components/GameDetails'
import { getImageUrl, formatPrice } from 'utils/helpers'
import gameCards from 'components/GameCardSlider/mock'
import highlight from 'components/Highlight/mock'
import { GameCardProps } from 'components/GameCard'

const client = initializeApollo()

export const getFilters = (): FilterProps[] => filtersMock as FilterProps[]

export const getGames = async (): Promise<GameCardProps[]> => {
  const { data } = await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  return data.games.map(normalizeGame)
}

export const getGameBySlug = async (slug: string): Promise<GameTemplateProps | undefined> => {
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
    },
    upComing: {
      gameCards,
      highlight
    },
    recommended: {
      gameCards
    }
  }
}
