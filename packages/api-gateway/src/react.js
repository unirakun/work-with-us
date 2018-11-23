// TODO: move this into UI package ?
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { ThemeProvider, ServerStyleSheet } from 'styled-components'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { App, theme } from '@work-with-us/ui'
import { StaticRouter } from 'react-router-dom'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'
import createSchema from './schema'
import cache from './cache'

let htmlData
let htmlDataPromise
const loadHtmlData = () => {
  if (!htmlDataPromise) {
    const filePath = path.resolve(__dirname, '..', '..', 'ui', 'build', 'index.html')
    htmlDataPromise = promisify(fs.readFile)(filePath, 'utf8')
  }

  return htmlDataPromise
}

const renderCache = cache({ name: 'render-cache' })
let schema

module.exports = async (ctx, next) => {
  const cachedItem = renderCache.get(ctx.path)
  if (cachedItem) {
    ctx.body = cachedItem
    return
  }
  console.log(`serving ${ctx.path} (not cached)`)

  if (!htmlData) {
    console.log('loading html base file...')
    htmlData = await loadHtmlData()
  }

  if (!schema) {
    schema = createSchema()
  }

  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  })

  const sheet = new ServerStyleSheet()
  const reactContext = {}
  const html = await renderToStringWithData(
    sheet.collectStyles(
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StaticRouter location={ctx.path} context={reactContext}>
            <App />
          </StaticRouter>
        </ThemeProvider>
      </ApolloProvider>,
    ),
  )

  // the react application doesn't found the path
  // we call the next middleware
  if (reactContext.notFound) {
    await next()
    return
  }

  const styleTags = sheet.getStyleTags()
  const replacedHtml = htmlData
    .replace('<div id="root"></div>', `<div id="root"></div><script charset="UTF-8">window.__APOLLO_STATE = ${JSON.stringify(await client.cache.extract())}</script>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('<style data-src="server-css"></style>', styleTags)

  renderCache.add(ctx.path, replacedHtml)
  ctx.body = replacedHtml
}
