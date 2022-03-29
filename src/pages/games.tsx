import { GetStaticPropsResult } from 'next'
import { FilterProps } from 'components/ExploreSidebar'
import filtersMock from 'components/ExploreSidebar/mock'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props}></GamesTemplate>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<GamesTemplateProps>> {
  const client = initializeApollo()

  const { data } = await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  return {
    props: {
      filters: filtersMock as FilterProps[],
      games: data.games.map(game => ({
        slug: game.slug,
        title: game.name,
        image: `http://localhost:1337${game.cover?.url}`,
        subtitle: game.developers[0].name,
        price: new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(
          game.price
        ),
        favorite: false
      }))
    }
  }
}
