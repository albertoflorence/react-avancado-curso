import { NextSeo } from 'next-seo'

import Base from 'templates/Base'
import Image from 'components/Image'
import MediaMatch from 'components/MediaMatch'
import Showcase from 'components/Showcase'
import Divider from 'components/Divider'
import TextContent from 'components/TextContent'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import * as S from './GameStyles'

export interface GameProps {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryProps
  description: string
  gameDetails: GameDetailsProps
}

export interface GameTemplateProps extends GameProps {
  upComing: {
    highlight?: HighlightProps
    gameCards: GameCardProps[]
  }
  recommended?: {
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
    <NextSeo
      title={gameInfo.title + ' - Won Games'}
      description={gameInfo.description}
      openGraph={{
        title: gameInfo.title + ' - Won Games',
        description: gameInfo.description,
        images: [{ url: cover, alt: gameInfo.title }]
      }}
    />
    <S.Cover>
      <Image src={cover} objectFit="cover" layout="fill" />
    </S.Cover>
    <S.Wrapper>
      <GameInfo {...gameInfo} />

      <MediaMatch greaterThan="medium">{gallery && <Gallery {...gallery} />}</MediaMatch>

      <TextContent title="Description" content={description} />

      <div>
        <GameDetails {...gameDetails} />
      </div>

      <Divider />

      <Showcase title="Up Coming" gameCards={upComing.gameCards} highlight={upComing.highlight} />

      {recommended && (
        <Showcase title="You may like these games" gameCards={recommended.gameCards} />
      )}
    </S.Wrapper>
  </Base>
)

export default Game
