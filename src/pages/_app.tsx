import Head from 'next/head'
import GlobalStyles from 'styles/global'
import NextNProgress from 'nextjs-progressbar'

import { SessionProvider } from 'next-auth/react'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'
import { CartProvider } from 'hooks'

import { useApollo } from 'utils/apollo'
import { AppProps } from 'next/app'
import theme from 'styles/theme'
import { WishlistProvider } from 'hooks/useWishlist/useWishlist'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>React Avançado</title>
                <link rel="shortcut icon" href="/img/icon-512.png" />
                <link rel="apple-touch-icon" href="/img/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="description" content="A simple project" />
              </Head>
              <GlobalStyles />
              <NextNProgress color={theme.colors.primary} height={3} />
              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default App
