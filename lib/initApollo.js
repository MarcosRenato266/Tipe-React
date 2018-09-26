import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'

let apolloClient = null
if (!process.browser) {
  global.fetch = fetch
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: 'https://api.tipe.io/graphql',
      credentials: 'same-origin',
      headers: {
        Authorization: 'ADD YOUR API KEY HERE',
        'Tipe-Id': 'ADD YOUR ORG ID HERE'
      }
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}