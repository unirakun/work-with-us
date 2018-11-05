import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from "apollo-link-http"
import { ThemeProvider } from 'styled-components'
import App from './app'
import theme from './theme'
import 'normalize.css'

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE),
  link: createHttpLink({
    uri: '/graphql',
  }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)
