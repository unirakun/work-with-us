/* eslint-env browser */
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import theme from './theme'

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE), // eslint-disable-line no-underscore-dangle
  link: new BatchHttpLink({ uri: '/graphql' }),
})

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// FIXME: require('./serviceWorker').register()
// We should think about cache (graphql) and SSR
