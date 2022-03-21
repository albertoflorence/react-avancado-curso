import Base from 'templates/Base/Base'
import { Image, MediaMatch, Showcase } from 'components'
import GameInfo, { GameInfoProps } from 'components/GameInfo/GameInfo'
import * as S from './GameStyles'
import Gallery, { GalleryProps } from 'components/Gallery/Gallery'
import TextContent from 'components/TextContent/TextContent'
import GameDetails, { GameDetailsProps } from 'components/GameDetails/GameDetails'
import { HighlightProps } from 'components/Highlight/Highlight'
import { GameCardProps } from 'components/GameCard/GameCard'

export interface GameTemplateProps {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryProps
  description: string
  gameDetails: GameDetailsProps
  upComing: {
    highlight: HighlightProps
    gameCards: GameCardProps[]
  }
  recommended: {
    gameCards: GameCardProps[]
  }
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  gameDetails,
  upComing,
  recommended
}: GameTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src={cover} objectFit="cover" layout="fill" />
    </S.Cover>
    <S.Wrapper>
      <GameInfo {...gameInfo} />

      <MediaMatch greaterThan="medium">{gallery && <Gallery {...gallery} />}</MediaMatch>

      <TextContent title="Description" content={description} />

      <S.DetailsWrapper>
        <GameDetails {...gameDetails} />
      </S.DetailsWrapper>

      <Showcase
        center
        title="Up Coming"
        gameCards={upComing.gameCards}
        highlight={upComing.highlight}
      />

      <Showcase center title="You may like these games" gameCards={recommended.gameCards} />
    </S.Wrapper>
  </Base>
)

export default Game
