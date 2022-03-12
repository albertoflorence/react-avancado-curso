import {
  Menu,
  Footer,
  Container,
  Heading,
  BannerSlider,
  GameCardSlider,
  Highlight
} from 'components'
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
      <ShowCase gameCards={newGames} title="News" center arrowColor="black" />
    </S.SectionNews>

    <ShowCase
      highlight={mostPopular.highlight}
      gameCards={mostPopular.gameCards}
      title="Most Popular"
    />
    <ShowCase highlight={upComing.highlight} gameCards={upComing.gameCards} title="Up Coming" />
    <ShowCase highlight={freeGames.highlight} gameCards={freeGames.gameCards} title="Free Games" />

    <S.Footer>
      <Container center>
        <Footer />
      </Container>
    </S.Footer>
  </S.Wrapper>
)

interface ShowCaseProps {
  highlight?: HighlightProps
  gameCards: GameCardProps[]
  title: string
  center?: boolean
  arrowColor?: 'white' | 'black'
}

const ShowCase = ({ highlight, gameCards, title, center, arrowColor }: ShowCaseProps) => (
  <Container center={center}>
    <S.Section>
      <Heading line="left" lineColor="secondary">
        {title}
      </Heading>
      {highlight && <Highlight {...highlight} />}
      <GameCardSlider items={gameCards} arrowColor={arrowColor} />
    </S.Section>
  </Container>
)

export default Home
