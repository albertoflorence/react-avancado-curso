import { MockedResponse } from '@apollo/client/testing'
import { QUERY_GAMES } from 'graphql/queries'

export const noGamesMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 12, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 12, where: {} }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'any game',
          slug: 'any-slug',
          cover: {
            url: 'any url'
          },
          developers: [{ name: 'any developer' }],
          price: 123,
          release_date: 'any date',
          discount: null,
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

export const fetchMoreMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 12, start: 1, where: {} }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'another game',
          slug: 'another-slug',
          cover: {
            url: 'another url'
          },
          developers: [{ name: 'another developer' }],
          price: 321,
          release_date: 'another date',
          discount: null,
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
