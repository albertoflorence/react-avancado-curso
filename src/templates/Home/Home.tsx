import { Menu, Footer, Container, BannerSlider, Showcase } from 'components'
import { BannerProps } from 'components/Banner/Banner'
import { GameCardProps } from 'components/GameCard/GameCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import * as S from './HomeStyles'

export interface HomeTemplateProps {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopular: {
    highlight: HighlightProps
    gameCards: GameCardProps[]
  }
  upComing: {
    highlight: HighlightProps
    gameCards: GameCardProps[]
  }
  freeGames: {
    highlight: HighlightProps
    gameCards: GameCardProps[]
  }
}

const Home = ({ banners, newGames, mostPopular, upComing, freeGames }: HomeTemplateProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>
    <Container mobileFullscreen>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase gameCards={newGames} title="News" center arrowColor="black" />
    </S.SectionNews>

    <Showcase
      highlight={mostPopular.highlight}
      gameCards={mostPopular.gameCards}
      title="Most Popular"
    />
    <Showcase title="Up Coming" gameCards={upComing.gameCards} />
    <Showcase highlight={upComing.highlight} gameCards={upComing.gameCards} reverse />

    <Showcase highlight={freeGames.highlight} gameCards={freeGames.gameCards} title="Free Games" />

    <S.Footer>
      <Container center>
        <Footer />
      </Container>
    </S.Footer>
  </S.Wrapper>
)

export default Home
