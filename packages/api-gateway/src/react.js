// import 'isomorphic-fetch'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider, renderToStringWithData, Query } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { App, theme } from '@work-with-us/ui'
import { ServerStyleSheet } from 'styled-components'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'
import schema from './schema'

const filePath = path.resolve(__dirname, '..', '..', 'ui', 'build', 'index.html')
let htmlData

module.exports = async (ctx, next) => {
  if (ctx.path === '/') {
    if (!htmlData) {
      console.log('Loading html base file...')
      htmlData = await promisify(fs.readFile)(filePath, 'utf8')
    }

    const client = new ApolloClient({
      ssrMode: true,
      link: new SchemaLink({ schema }),
      cache: new InMemoryCache(),
    })

    const sheet = new ServerStyleSheet()
    const html = await renderToStringWithData(
      sheet.collectStyles(
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ApolloProvider>
      )
    )
    const styleTags = sheet.getStyleTags()

    ctx.body = htmlData
      .replace('<div id="root"></div>', `<div id="root"></div><script charset="UTF-8">window.__APOLLO_STATE = ${JSON.stringify(await client.cache.extract())}</script>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace('<style data-src="server-css"></style>', styleTags)

  } else {
    await next()
  }
}
