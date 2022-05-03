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
          id: '1',
          name: 'any game',
          slug: 'any-slug',
          cover: {
            url: '/any_url'
          },
          developers: [{ name: 'any developer' }],
          price: 100,
          release_date: 'any date',
          discount: null,
          __typename: 'Game'
        },
        {
          id: '2',
          name: 'another game',
          slug: 'another-slug',
          cover: {
            url: '/any_url'
          },
          developers: [{ name: 'another developer' }],
          price: 200,
          discount: null,
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

export const gameDiscountMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { slug: ['any-slug'] } }
  },
  result: {
    data: {
      games: [
        {
          id: '3',
          name: 'any game',
          slug: 'any-slug',
          cover: {
            url: '/any_url'
          },
          developers: [{ name: 'any developer' }],
          price: 100,
          release_date: 'any date',
          discount: 80,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '3' }],
        __typename: 'GameConnection'
      }
    }
  }
}
