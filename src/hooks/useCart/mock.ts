import { MockedResponse } from '@apollo/client/testing'
import { QUERY_GAMES } from 'graphql/queries'

export const gamesMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { slug: ['any-slug', 'another-slug'] } }
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
