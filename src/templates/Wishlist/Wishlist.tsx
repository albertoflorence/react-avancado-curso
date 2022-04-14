import Showcase from 'components/Showcase'
import Grid from 'components/Grid'
import Divider from 'components/Divider'
import Empty from 'components/Empty'
import Heading from 'components/Heading'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import Base from 'templates/Base'

import * as S from './WishlistStyles'
import { useWishlist } from 'hooks/useWishlist'

export interface WishlistTemplateProps {
  recommended?: {
    gameCards: GameCardProps[]
    highlight?: HighlightProps
  }
}

const Wishlist = ({ recommended }: WishlistTemplateProps) => {
  const { items } = useWishlist()
  return (
    <Base>
      <S.Wrapper>
        <Heading line="left" lineColor="secondary">
          Wishlist
        </Heading>
        {items.length ? (
          <Grid>
            {items.map(items => (
              <GameCard key={items.title} {...items} />
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

        {recommended && (
          <Showcase
            title="You may like these games"
            gameCards={recommended.gameCards}
            highlight={recommended.highlight}
          />
        )}
      </S.Wrapper>
    </Base>
  )
}

export default Wishlist
