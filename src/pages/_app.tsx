import '@/styles/globals.css'

import Header from '@/components/Header'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import type { AppProps } from 'next/app'

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
