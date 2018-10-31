import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '@work-with-us/ui'
import { ServerStyleSheet } from 'styled-components'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'

const filePath = path.resolve(__dirname, '..', '..', 'ui', 'build', 'index.html')
let htmlData

module.exports = async (ctx, next) => {
  if (ctx.path === '/') {
    if (!htmlData) {
      console.log('Loading html base file...')
      htmlData = await promisify(fs.readFile)(filePath, 'utf8')
    }

    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags()

    ctx.body = htmlData
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace('<style data-src="server-css"></style>', styleTags)
  } else {
    await next()
  }
}
