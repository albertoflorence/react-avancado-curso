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
  const { items, loading } = useWishlist()
  return (
    <Base>
      <S.Wrapper>
        <S.Content data-cy="my-wishlist">
          <Heading line="left" lineColor="secondary">
            Wishlist
          </Heading>
          {items.length ? (
            <Grid data-cy="my-wishlist">
              {items.map(items => (
                <GameCard key={items.title} {...items} />
              ))}
            </Grid>
          ) : (
            !loading && (
              <Empty
                title="Your wishlist is empty"
                description="Games added to your wishlist will appear here"
                toHome
              />
            )
          )}
        </S.Content>

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
