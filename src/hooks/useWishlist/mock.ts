import { MockedResponse } from '@apollo/client/testing'
import { MUTATION_UPDATE_WISHLIST } from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const createMock = (id: number) => ({
  id: String(id),
  name: 'any game',
  slug: 'any-slug' + id,
  cover: {
    url: '/any_url'
  },
  developers: [{ name: 'any developer' }],
  price: 100 * id,
  discount: null,
  release_date: 'any date',
  __typename: 'Game'
})
export const wishlistMock: MockedResponse = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { jwt: '123' } }
  },
  result: {
    data: {
      wishlist: {
        games: [createMock(1), createMock(2)],
        __typename: 'Wishlist'
      }
    }
  }
}

export const updateWishlistMock: MockedResponse = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        data: { games: ['1', '2', '3'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          games: [createMock(1), createMock(2), createMock(3)],
          __typename: 'Wishlist'
        }
      }
    }
  }
}

export const removeWishlistMock: MockedResponse = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { jwt: '123' } },
    variables: {
      input: {
        data: { games: ['2'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          games: [createMock(2)],
          __typename: 'Wishlist'
        }
      }
    }
  }
}

export const mockGames = () => [
  {
    id: '1',
    slug: 'any-slug1',
    title: 'any game',
    image: 'http://localhost:1337/any_url',
    price: '$100.00',
    subtitle: 'any developer'
  },
  {
    id: '2',
    slug: 'any-slug2',
    title: 'any game',
    image: 'http://localhost:1337/any_url',
    price: '$200.00',
    subtitle: 'any developer'
  },
  {
    id: '3',
    slug: 'any-slug3',
    title: 'any game',
    image: 'http://localhost:1337/any_url',
    price: '$300.00',
    subtitle: 'any developer'
  }
]
