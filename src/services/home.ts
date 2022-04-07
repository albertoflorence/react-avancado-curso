import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries'
import { HomeTemplateProps } from 'templates/Home/Home'
import { initializeApollo } from 'utils/apollo'
import { mapperBanner, mapperGame, mapperSection } from './mappers'

const client = initializeApollo()

export const getHome = async (): Promise<HomeTemplateProps> => {
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data } = await client.query<QueryHome>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    },
    fetchPolicy: 'no-cache'
  })

  const { banners, freeGames, newGames, sections, upComingGames } = data

  return {
    banners: banners.map(mapperBanner),
    newGames: newGames.map(mapperGame),
    mostPopular: mapperSection(sections?.mostPopular?.highlight, sections?.mostPopular?.games),
    upComing: mapperSection(sections?.upComing?.highlight, upComingGames),
    freeGames: mapperSection(sections?.freeGames?.highlight, freeGames)
  }
}
