import Home, { HomeTemplateProps } from 'templates/Home/Home'
import { initializeApollo } from 'utils/apollo'
import { GetStaticPropsResult } from 'next'
import { formatPrice, getImageUrl } from 'utils/helpers'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'
import { GameFragment } from 'graphql/generated/GameFragment'
import { GameCardProps } from 'components/GameCard'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { HighlightProps } from 'components/Highlight'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeTemplateProps>> {
  const client = initializeApollo()
  const { data } = await client.query<QueryHome>({ query: QUERY_HOME })

  const { banners, freeGames, newGames, sections, upComingGames } = data
  return {
    revalidate: 60,
    props: {
      banners: banners.map(banner => ({
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label as string,
        buttonLink: banner.button?.href as string,
        image: getImageUrl(banner.image?.url),
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color || undefined
        })
      })),
      newGames: newGames.map(normalizeGame),
      mostPopular: normalizeSection(sections?.mostPopular?.highlight, sections?.mostPopular?.games),
      upComing: normalizeSection(sections?.upComing?.highlight, upComingGames),
      freeGames: normalizeSection(sections?.freeGames?.highlight, freeGames)
    }
  }
}

interface NormalizeSectionResult {
  highlight?: HighlightProps
  gameCards: GameCardProps[]
}

const normalizeSection = (
  highlight?: HighlightFragment | null,
  gameCards: GameFragment[] = []
): NormalizeSectionResult => ({
  ...(highlight && { highlight: normalizeHighlight(highlight) }),
  gameCards: gameCards.map(normalizeGame)
})

const normalizeHighlight = (highlight: HighlightFragment): HighlightProps => ({
  title: highlight.title,
  subtitle: highlight.subtitle,
  background: getImageUrl(highlight.background?.url),
  image: getImageUrl(highlight.image?.url),
  buttonLabel: highlight.buttonLabel,
  buttonLink: highlight.buttonLink,
  reverse: highlight.reverse
})

const normalizeGame = (game: GameFragment): GameCardProps => ({
  title: game.name,
  subtitle: game.developers[0].name,
  slug: game.slug,
  image: getImageUrl(game.cover?.url),
  price: formatPrice(game.price),
  favorite: false
})
