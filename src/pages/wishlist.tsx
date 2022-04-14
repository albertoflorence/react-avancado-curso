import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist/Wishlist'
import { getRecommended } from 'services'
import protectedRoutes from 'utils/protectedRoutes'
import { GetServerSidePropsContext } from 'next'
import { QueryWishlist } from 'graphql/generated/QueryWishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import { initializeApollo } from 'utils/apollo'

export default function Index(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  if (!session) return { props: {} }

  const client = initializeApollo(undefined, session)
  await client.query<QueryWishlist>({ query: QUERY_WISHLIST })

  const recommended = await getRecommended()

  return {
    props: {
      initialApolloState: client.cache.extract(),
      session,
      recommended
    }
  }
}
