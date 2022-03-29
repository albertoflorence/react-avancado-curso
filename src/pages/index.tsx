import Home, { HomeTemplateProps } from 'templates/Home/Home'
import gameCards from 'components/GameCardSlider/mock'
import highlight from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_BANNERS } from 'graphql/queries/home'
import { QueryBanners } from 'graphql/generated/QueryBanners'
import { GetStaticPropsResult } from 'next'
import { getImageUrl } from 'utils/helpers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeTemplateProps>> {
  const client = initializeApollo()
  const { data } = await client.query<QueryBanners>({ query: QUERY_BANNERS })
  return {
    revalidate: 60,
    props: {
      banners: data.banners.map(banner => ({
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
      newGames: gameCards,
      mostPopular: { highlight, gameCards },
      upComing: { highlight, gameCards },
      freeGames: { highlight, gameCards }
    }
  }
}
