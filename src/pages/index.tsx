import Home, { HomeTemplateProps } from 'components/Home/Home'
import gameCards from 'components/GameCardSlider/mock'
import banners from 'components/BannerSlider/mock'
import highlight from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps(): { props: HomeTemplateProps } {
  return {
    props: {
      banners,
      newGames: gameCards,
      mostPopular: { highlight, gameCards },
      upComing: { highlight, gameCards },
      freeGames: { highlight, gameCards }
    }
  }
}
