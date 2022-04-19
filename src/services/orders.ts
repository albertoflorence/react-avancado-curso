import { GameItemProps } from 'components/GameItem'
import { QueryOrders, QueryOrdersVariables } from 'graphql/generated/QueryOrders'
import { QUERY_ORDERS } from 'graphql/queries/orders'
import { Session } from 'next-auth'
import { initializeApollo } from 'utils/apollo'
import { mapperOrder } from './mappers'

export const getOrders = async (id: number, session: Session) => {
  const client = initializeApollo(undefined, session)
  const { data } = await client.query<QueryOrders, QueryOrdersVariables>({
    query: QUERY_ORDERS,
    variables: { id },
    fetchPolicy: 'no-cache'
  })
  const mappedOrder = data.orders.reduce(
    (arr, order) => arr.concat(...order.games.map(() => mapperOrder(order))),
    [] as GameItemProps[]
  )

  return mappedOrder
}
