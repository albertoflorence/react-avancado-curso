import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries'
import { parseQueryStringToWhere } from 'utils/filter'
import { GetServerSidePropsContext } from 'next'
import { FilterProps } from 'components/ExploreSidebar'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props}></GamesTemplate>
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const client = initializeApollo()
  await client.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({ queryString: query, filterItems: filters }),
      sort: query.sort as string
    }
  })

  return {
    props: {
      filters,
      initialApolloState: client.cache.extract()
    }
  }
}

const filters: FilterProps[] = [
  {
    title: 'Price',
    type: 'radio',
    name: 'price_lte',
    inputs: [
      { label: 'FREE', name: '0' },
      { label: 'Under $20', name: '20' },
      { label: 'Under $35', name: '35' },
      { label: 'Under $50', name: '50' },
      { label: 'Under $100', name: '100' },
      { label: 'Under $300', name: '300' }
    ]
  },
  {
    title: 'Sort By',
    type: 'radio',
    name: 'sort',
    inputs: [
      { label: 'Lowest to Highest', name: 'price:asc' },
      { label: 'Highest to Lowest', name: 'price:desc' }
    ]
  },
  {
    title: 'Platforms',
    type: 'checkbox',
    name: 'platforms',
    inputs: [
      { label: 'Windows', name: 'windows' },
      { label: 'Mac', name: 'mac' },
      { label: 'Linux', name: 'linux' }
    ]
  },
  {
    title: 'Categories',
    type: 'checkbox',
    name: 'categories',
    inputs: [
      { label: 'Action', name: 'action' },
      { label: 'Adventure', name: 'adventure' },
      { label: 'Sports', name: 'sports' },
      { label: 'Puzzle', name: 'puzzle' },
      { label: 'Horror', name: 'horror' },
      { label: 'Platform', name: 'platform' },
      { label: 'Fantasy', name: 'fantasy' },
      { label: 'Rpg', name: 'rpg' },
      { label: 'JRPG', name: 'jrpg' },
      { label: 'Simulation', name: 'simulation' },
      { label: 'Strategy', name: 'strategy' },
      { label: 'Shooter', name: 'shooter' }
    ]
  }
]
