import filtersMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

export default function Index(props: GamesTemplateProps) {
  return <GamesTemplate {...props}></GamesTemplate>
}

export function getStaticProps(): { props: GamesTemplateProps } {
  return {
    props: {
      filters: filtersMock as GamesTemplateProps['items'],
      games: gamesMock
    }
  }
}
