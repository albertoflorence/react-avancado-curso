import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QueryUpComing, QueryUpComingVariables } from 'graphql/generated/QueryUpComing'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_UPCOMING } from 'graphql/queries/upComing'
import { initializeApollo } from 'utils/apollo'
import { normalizeSection } from './normalizer'

interface ShowcaseProps {
  highlight?: HighlightProps
  gameCards: GameCardProps[]
}

export const getRecommended = async (): Promise<ShowcaseProps | undefined> => {
  const client = initializeApollo()
  const { data } = await client.query<QueryRecommended>({ query: QUERY_RECOMMENDED })

  if (!data.recommended?.section) return

  const { highlight, games } = data.recommended.section

  return normalizeSection(highlight, games)
}

export const getUpComing = async (): Promise<ShowcaseProps> => {
  const TODAY = new Date().toISOString().slice(0, 10)
  const client = initializeApollo()
  const { data } = await client.query<QueryUpComing, QueryUpComingVariables>({
    query: QUERY_UPCOMING,
    variables: {
      date: TODAY
    }
  })

  return normalizeSection(data.section?.upComing?.highlight, data.upComingGames)
}
