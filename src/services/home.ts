import { QueryHome } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import { HomeTemplateProps } from 'templates/Home/Home'
import { initializeApollo } from 'utils/apollo'
import { normalizeBanner, normalizeGame, normalizeSection } from './normalizer'

const client = initializeApollo()

export const getHome = async (): Promise<HomeTemplateProps> => {
  const { data } = await client.query<QueryHome>({ query: QUERY_HOME })

  const { banners, freeGames, newGames, sections, upComingGames } = data

  return {
    banners: banners.map(normalizeBanner),
    newGames: newGames.map(normalizeGame),
    mostPopular: normalizeSection(sections?.mostPopular?.highlight, sections?.mostPopular?.games),
    upComing: normalizeSection(sections?.upComing?.highlight, upComingGames),
    freeGames: normalizeSection(sections?.freeGames?.highlight, freeGames)
  }
}
