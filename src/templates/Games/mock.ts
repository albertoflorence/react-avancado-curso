import { MockedResponse } from '@apollo/client/testing'
import { QUERY_GAMES } from 'graphql/queries'

export const noGamesMock: MockedResponse = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 12, where: {} }
  },
  result: {
    data: {
      games: []
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
          name: 'any game',
          slug: 'any-slug',
          cover: {
            url: 'any url'
          },
          developers: [{ name: 'any developer' }],
          price: 123,
          release_date: 'any date',
          __typename: 'Game'
        }
      ]
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
          name: 'another game',
          slug: 'another-slug',
          cover: {
            url: 'another url'
          },
          developers: [{ name: 'another developer' }],
          price: 321,
          release_date: 'another date',
          __typename: 'Game'
        }
      ]
    }
  }
}
