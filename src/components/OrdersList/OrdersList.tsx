import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './OrdersListStyles'

export interface OrdersListProps {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading line="bottom" size="small" color="black">
      My Orders
    </Heading>
    {items.length ? (
      items.map(props => <GameItem key={props.title} {...props} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore games and offers"
        toHome
      />
    )}
  </S.Wrapper>
)

export default OrdersList
