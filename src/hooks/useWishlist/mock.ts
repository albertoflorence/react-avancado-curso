import { MockedResponse } from '@apollo/client/testing'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

export const wishlistMock: MockedResponse = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } }
  },
  result: {
    data: {
      wishlist: {
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
        __typename: 'Wishlist'
      }
    }
  }
}
