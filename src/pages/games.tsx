import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { getFilters } from 'services'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props}></GamesTemplate>
}

export async function getStaticProps() {
  const client = initializeApollo()
  await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 12
    }
  })
  const filters = getFilters()

  return {
    props: {
      filters,
      initialApolloState: client.cache.extract()
    }
  }
}
