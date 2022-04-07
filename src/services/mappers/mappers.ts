import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { BannerFragment } from 'graphql/generated/BannerFragment'
import { GameFragment } from 'graphql/generated/GameFragment'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { getImageUrl, formatPrice } from 'utils/helpers'

interface MapperSectionResult {
  highlight?: HighlightProps
  gameCards: GameCardProps[]
}

export const mapperSection = (
  highlight?: HighlightFragment | null,
  gameCards: GameFragment[] = []
): MapperSectionResult => ({
  ...(highlight && { highlight: mapperHighlight(highlight) }),
  gameCards: gameCards.map(mapperGame)
})

export const mapperHighlight = (highlight: HighlightFragment): HighlightProps => ({
  title: highlight.title,
  subtitle: highlight.subtitle,
  background: getImageUrl(highlight.background?.url),
  image: getImageUrl(highlight.image?.url),
  buttonLabel: highlight.buttonLabel,
  buttonLink: highlight.buttonLink,
  reverse: highlight.reverse
})

export const mapperGame = (game: GameFragment): GameCardProps => ({
  title: game.name,
  subtitle: game.developers[0].name,
  slug: game.slug,
  image: getImageUrl(game.cover?.url),
  price: formatPrice(game.price),
  favorite: false
})

export const mapperBanner = (banner: BannerFragment): BannerProps => ({
  title: banner.title,
  subtitle: banner.subtitle,
  buttonLabel: banner.button?.label as string,
  buttonLink: banner.button?.href as string,
  image: getImageUrl(banner.image?.url),
  ...(banner.ribbon && {
    ribbon: banner.ribbon.text,
    ribbonColor: banner.ribbon.color || undefined
  })
})
