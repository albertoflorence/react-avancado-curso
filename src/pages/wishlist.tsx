import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist/Wishlist'
import mockGameCards from 'components/GameCardSlider/mock'
import { getRecommended } from 'services'
import protectedRoutes from 'utils/protectedRoutes'
import { GetServerSidePropsContext } from 'next'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const recommended = await getRecommended()

  return {
    props: {
      session,
      games: mockGameCards,
      recommended
    }
  }
}
