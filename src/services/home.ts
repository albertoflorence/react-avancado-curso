import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries'
import { HomeTemplateProps } from 'templates/Home/Home'
import { initializeApollo } from 'utils/apollo'
import { normalizeBanner, normalizeGame, normalizeSection } from './normalizer'

const client = initializeApollo()

export const getHome = async (): Promise<HomeTemplateProps> => {
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data } = await client.query<QueryHome>({
    query: QUERY_HOME,
    variables: {
      date: TODAY
    }
  })

  const { banners, freeGames, newGames, sections, upComingGames } = data

  return {
    banners: banners.map(normalizeBanner),
    newGames: newGames.map(normalizeGame),
    mostPopular: normalizeSection(sections?.mostPopular?.highlight, sections?.mostPopular?.games),
    upComing: normalizeSection(sections?.upComing?.highlight, upComingGames),
    freeGames: normalizeSection(sections?.freeGames?.highlight, freeGames)
  }
}
