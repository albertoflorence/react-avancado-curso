import { MockedResponse } from '@apollo/client/testing'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export const gamesMock: MockedResponse = {
  request: {
    query: QUERY_WISHLIST,
    variables: { where: { email: 'test@test.com' } }
  },
  result: {
    data: {
      games: [
        {
          name: 'any game',
          slug: 'any-slug',
          cover: {
            url: '/any_url'
          },
          developers: [{ name: 'any developer' }],
          price: 100,
          release_date: 'any date',
          __typename: 'Game'
        },
        {
          name: 'another game',
          slug: 'another-slug',
          cover: {
            url: '/any_url'
          },
          developers: [{ name: 'another developer' }],
          price: 200,
          release_date: 'another date',
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}
