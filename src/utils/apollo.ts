import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { concatPagination } from '@apollo/client/utilities'
import { Session } from 'next-auth'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL + '/graphql'
  })

  const authLink = setContext((_, { headers, session: clientSession }) => {
    const jwt = session?.jwt || clientSession?.jwt || ''

    return {
      headers: {
        ...headers,
        authorization: jwt ? 'Bearer ' + jwt : ''
      }
    }
  })

  return new ApolloClient({
    ssrMode: isServerSide(),
    link: authLink.concat(httpLink),
    cache: apolloCache
  })
}

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: concatPagination(['where', 'sort'])
      }
    }
  }
})

export function initializeApollo(initialState?: NormalizedCacheObject, session?: Session | null) {
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  if (isServerSide()) return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState?: NormalizedCacheObject, session?: Session | null) {
  const store = useMemo(() => initializeApollo(initialState, session), [initialState, session])

  return store
}

const isServerSide = () => typeof window === 'undefined'
