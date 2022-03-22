import Showcase from 'components/Showcase'
import Grid from 'components/Grid'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Base from 'templates/Base'

import * as S from './WishlistStyles'

export interface WishlistTemplateProps {
  games?: GameCardProps[]
  recommended: {
    gameCards: GameCardProps[]
    highlight: HighlightProps
  }
}

const Wishlist = ({ games = [], recommended }: WishlistTemplateProps) => (
  <Base>
    <S.Wrapper>
      <Heading line="left" lineColor="secondary">
        Wishlist
      </Heading>
      {games.length ? (
        <Grid>
          {games.map(props => (
            <GameCard key={props.title} {...props} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          toHome
        />
      )}

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
