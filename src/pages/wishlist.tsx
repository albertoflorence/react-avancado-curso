import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist/Wishlist'
import mockGameCards from 'components/GameCardSlider/mock'
import mockHighlight from 'components/Highlight/mock'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps(): Promise<{ props: WishlistTemplateProps }> {
  return {
    props: {
      games: mockGameCards,
      recommended: {
        gameCards: mockGameCards,
        highlight: mockHighlight
      }
    }
  }
}
