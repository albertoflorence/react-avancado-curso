import Game, { GameTemplateProps } from 'templates/Game/Game'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { getGameBySlug, getGames, getRecommended, getUpComing } from 'services'

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export async function getStaticPaths() {
  const games = await getGames()

  const paths = games.map(game => ({
    params: {
      slug: game.slug
    }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({
  params
}): Promise<GetStaticPropsResult<GameTemplateProps>> => {
  if (typeof params?.slug !== 'string') return { notFound: true }

  const game = await getGameBySlug(params.slug)

  if (!game) return { notFound: true }

  const recommended = await getRecommended()
  const upComing = await getUpComing()

  return {
    revalidate: 60,
    props: {
      ...game,
      upComing,
      recommended
    }
  }
}
