import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist/Wishlist'
import mockGameCards from 'components/GameCardSlider/mock'
import { getRecommended } from 'services'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps(): Promise<{ props: WishlistTemplateProps }> {
  const recommended = await getRecommended()
  return {
    props: {
      games: mockGameCards,
      recommended
    }
  }
}
