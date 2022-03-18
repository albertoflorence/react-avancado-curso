import { Container, Heading, GameCardSlider, Highlight } from 'components'
import { GameCardProps } from 'components/GameCard/GameCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import * as S from './ShowcaseStyles'

export interface ShowcaseProps {
  highlight?: HighlightProps
  gameCards?: GameCardProps[]
  title?: string
  center?: boolean
  arrowColor?: 'white' | 'black'
  reverse?: boolean
}

const Showcase = ({ highlight, gameCards, title, center, arrowColor, reverse }: ShowcaseProps) => (
  <Container center={center}>
    <S.Section>
      {title && (
        <Heading line="left" lineColor="secondary">
          {title}
        </Heading>
      )}
      {highlight && <Highlight {...highlight} reverse={reverse} />}
      {gameCards && <GameCardSlider items={gameCards} arrowColor={arrowColor} />}
    </S.Section>
  </Container>
)

export default Showcase
