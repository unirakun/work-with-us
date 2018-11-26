const mount = require('koa-mount')
const session = require('koa-session')
const grant = require('grant-koa')
const koaqs = require('koa-qs')
const got = require('got')
const config = require('./config')

module.exports = (app) => {
  if (!app.keys) app.keys = [] // eslint-disable-line no-param-reassign
  app.keys.push('grant')

  app.use(session(app))
  app.use(mount(grant(config)))
  koaqs(app) // TODO: try to move it at top

  // TODO: should wrap graphql
  app.use(async (ctx, next) => {
    if (ctx.path === '/google_callback') {
      // FIXME: complete this
      const response = await got(
        'https://content.googleapis.com/plus/v1/people/me',
        {
          json: true,
          headers: {
            authorization: `Bearer ${ctx.query.access_token}`,
          },
        },
      )

      ctx.body = response.body
    } else {
      await next()
    }
  })

}
