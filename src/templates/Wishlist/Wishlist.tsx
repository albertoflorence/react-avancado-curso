import { Heading, Showcase } from 'components'
import GameCard, { GameCardProps } from 'components/GameCard/GameCard'
import { HighlightProps } from 'components/Highlight/Highlight'
import Base from 'templates/Base/Base'
import * as S from './WishlistStyles'

export interface WishlistTemplateProps {
  games?: GameCardProps[]
  recommended: {
    gameCards: GameCardProps[]
    highlight: HighlightProps
  }
}

const Wishlist = ({ games, recommended }: WishlistTemplateProps) => (
  <Base>
    <S.Wrapper>
      <Heading line="left" lineColor="secondary">
        Wishlist
      </Heading>
      <S.Content>
        {games ? (
          games.map(props => <GameCard key={props.title} {...props} />)
        ) : (
          <S.Text>Add here games that you wish to buy</S.Text>
        )}
      </S.Content>

      <Showcase
        title="You may like these games"
        gameCards={recommended.gameCards}
        highlight={recommended.highlight}
      />
    </S.Wrapper>
  </Base>
)

export default Wishlist
