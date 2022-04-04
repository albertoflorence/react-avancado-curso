import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { initializeApollo } from 'utils/apollo'
import { normalizeSection } from './normalizer'

interface SectionProps {
  highlight?: HighlightProps
  gameCards: GameCardProps[]
}
export const getRecommended = async (): Promise<SectionProps | undefined> => {
  const client = initializeApollo()
  const { data } = await client.query<QueryRecommended>({ query: QUERY_RECOMMENDED })

  if (!data.recommended?.section) return

  const { highlight, games } = data.recommended.section

  return normalizeSection(highlight, games)
}
