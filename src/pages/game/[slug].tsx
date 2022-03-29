import Game, { GameTemplateProps } from 'templates/Game/Game'
import gameCards from 'components/GameCardSlider/mock'
import highlight from 'components/Highlight/mock'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { QueryGameBySlug, QueryGameBySlugVariables } from 'graphql/generated/QueryGameBySlug'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { formatPrice, getImageUrl } from 'utils/helpers'
import { Platform, Rating } from 'components/GameDetails'

const client = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const paths = data.games.map(game => ({
    params: {
      slug: game.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<GetStaticPropsResult<GameTemplateProps>> => {
  const { data } = await client.query<QueryGameBySlug, QueryGameBySlugVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  return {
    revalidate: 60,
    props: {
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
}
