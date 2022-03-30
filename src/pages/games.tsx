import { GetStaticPropsResult } from 'next'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import { getFilters, getGames } from 'services'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props}></GamesTemplate>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<GamesTemplateProps>> {
  const games = await getGames()
  const filters = getFilters()

  return {
    props: {
      games,
      filters
    }
  }
}
