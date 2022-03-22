import Base from 'templates/Base/Base'
import Container from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

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
  <Base>
    <S.Wrapper>
      <Container mobileFullscreen>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container center>
          <Showcase gameCards={newGames} title="News" center arrowColor="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <Showcase
          highlight={mostPopular.highlight}
          gameCards={mostPopular.gameCards}
          title="Most Popular"
        />
      </Container>

      <Container>
        <Showcase title="Up Coming" gameCards={upComing.gameCards} />
      </Container>

      <Container>
        <Showcase highlight={upComing.highlight} gameCards={upComing.gameCards} reverse />
      </Container>

      <Container>
        <Showcase
          highlight={freeGames.highlight}
          gameCards={freeGames.gameCards}
          title="Free Games"
        />
      </Container>
    </S.Wrapper>
  </Base>
)

export default Home
