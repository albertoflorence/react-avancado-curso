import Heading from 'components/Heading'
import GameCardSlider from 'components/GameCardSlider'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './ShowcaseStyles'

export interface ShowcaseProps {
  highlight?: HighlightProps
  gameCards?: GameCardProps[]
  title?: string
  arrowColor?: 'white' | 'black'
  reverse?: boolean
}

const Showcase = ({ highlight, gameCards, title, arrowColor, reverse }: ShowcaseProps) => (
  <S.Section>
    {title && (
      <Heading line="left" lineColor="secondary">
        {title}
      </Heading>
    )}
    {highlight && <Highlight {...highlight} reverse={reverse} />}
    {gameCards && <GameCardSlider items={gameCards} arrowColor={arrowColor} />}
  </S.Section>
)

export default Showcase
