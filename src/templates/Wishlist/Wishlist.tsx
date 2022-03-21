import { Heading, Showcase, Grid, Divider } from 'components'
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
      <Grid>
        {games ? (
          games.map(props => <GameCard key={props.title} {...props} />)
        ) : (
          <S.Text>Add here games that you wish to buy</S.Text>
        )}
      </Grid>

      <Divider />

      <Showcase
        title="You may like these games"
        gameCards={recommended.gameCards}
        highlight={recommended.highlight}
      />
    </S.Wrapper>
  </Base>
)

export default Wishlist
