import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import App from './app'
import 'normalize.css'

const theme = {
  dark: '#484848',
  light: '#f3f3f3',
  primary: {
    bg: '#7901c3',
    fg: '#f3f3f3',
  },
  secondary: {
    bg: '#4d6cfa',
    fg: '#f3f3f3',
  },
}

const client = new ApolloClient({})

const Wrapped = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
)

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <Wrapped />,
    document.getElementById('root'),
  )
}

export default Wrapped
