import React from 'react'
import ReactDOM from 'react-dom'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import App from './app'
import 'normalize.css'

// const client = new ApolloClient({})

const theme = {
  primary: {
    bg: '#7901c3',
    fg: 'white',
  },
  secondary: {
    bg: '#4d6cfa',
    fg: 'white',
  },
}

const Wrapped = () => (
  // <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  // </ApolloProvider>
)

if (typeof window !== 'undefined') {
  ReactDOM.render(
    <Wrapped />,
    document.getElementById('root'),
  )
}

export default Wrapped
