import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { GameItemProps } from 'components/GameItem'
import { HighlightProps } from 'components/Highlight'
import { BannerFragment } from 'graphql/generated/BannerFragment'
import { GameFragment } from 'graphql/generated/GameFragment'
import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
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
  id: game.id,
  title: game.name,
  subtitle: game.developers[0].name,
  slug: game.slug,
  image: getImageUrl(game.cover?.url),
  price: formatPrice(game.price),
  ...(game.discount && {
    discount: formatPrice(game.discount),
    ribbon: Math.round((1 - game.discount / game.price) * 100) + '% OFF'
  })
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

export const mapperOrder = (order: QueryOrders_orders): GameItemProps[] => {
  return order.games.map(game => ({
    id: game.id,
    title: game.name,
    price: formatPrice(game.discount || game.price),
    image: getImageUrl(game.cover?.url),
    downloadLink: '',
    slug: game.slug,
    paymentInfo: {
      number: order.card_last4 ? '**** '.repeat(3) + order.card_last4 : 'Free Game',
      flag: order.card_brand,
      image: order.card_brand ? '/img/cards/' + order.card_brand + '.png' : null,
      purchaseDate:
        'Purchased made on ' +
        new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(order.created_at))
    }
  }))
}
