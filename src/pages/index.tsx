import Home, { HomeTemplateProps } from 'templates/Home/Home'
import { GetStaticPropsResult } from 'next'
import { getHome } from 'services'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeTemplateProps>> {
  const homeProps = await getHome()

  return {
    revalidate: 60,
    props: homeProps
  }
}
