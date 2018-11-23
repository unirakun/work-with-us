const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const compress = require('koa-compress')
const conditional = require('koa-conditional-get')
const etag = require('koa-etag')
const { closeAll } = require('@work-with-us/storage')
const logger = require('@work-with-us/logger')
const GraphQL = require('./graphql')

const app = new Koa()
const graphql = GraphQL(app)
const staticPath = path.resolve(__dirname, '../../ui/build')

app.use(conditional())
app.use(etag())
app.use(compress({
  filter: (contentType) => {
    if (contentType.startsWith('image/')) return true
    if (contentType.startsWith('font/')) return true
    if (contentType.startsWith('text')) return true
    if (contentType === 'application/javascript') return true
    if (contentType === 'application/json') return true

    logger.log('This content type is not compressed', contentType)

    return false
  },
}))

const ONE_HOUR_CACHE = 60 * 60
const ONE_DAY_CACHE = ONE_HOUR_CACHE * 24
const ONE_WEEK_CACHE = ONE_DAY_CACHE * 7
const ONE_YEAR_CACHE = ONE_DAY_CACHE * 365
const getMaxAge = (contentType) => {
  if (contentType.startsWith('image/')) return ONE_YEAR_CACHE
  if (contentType.startsWith('font/')) return ONE_YEAR_CACHE
  if (contentType.startsWith('text')) return ONE_HOUR_CACHE
  if (contentType === 'application/javascript') return ONE_WEEK_CACHE
  if (contentType === 'application/json') return ONE_DAY_CACHE

  logger.log('This content type is not cached', contentType)

  return 0
}

app.use(async (ctx, next) => {
  await next()

  if (ctx.status >= 200 && ctx.status < 400) {
    const contentType = ctx.response.headers['content-type'].replace(/; charset=.*?$/, '')
    const cacheControl = `max-age=${getMaxAge(contentType)}`

    ctx.set('Cache-Control', cacheControl)
  }
})

app.use(async (ctx, next) => {
  // bypass static serving when the client ask for root page
  // because it should be render by react
  // we should not return the empty html (elsewise the SSR doesn't take place)
  if (ctx.path === '/') {
    await next()
    return
  }

  // in other cases we serve statics files
  // compression and max age are set by an other middleware
  await serve(
    staticPath,
    {
      maxAge: 0,
      br: false,
      gzip: false,
    },
  )(ctx, next)
})

app.use(async (ctx, next) => {
  const react = require('./react') // eslint-disable-line global-require
  return react(ctx, next)
})

const port = 4000
const host = '::'

const server = app.listen(port, host, () => {
  logger.timeEnd('server ready')
  logger.info('🍛  ', staticPath)
  logger.info('🚀  listening', `http://${host}:${port}${graphql.graphqlPath}`)
})

const interrupt = sigName => async () => {
  logger.warn('caught interrupt signal', sigName) // eslint-disable-line no-console

  logger.debug('closing HTTP socket...') // eslint-disable-line no-console
  server.close(() => {
    closeAll(() => {
      process.exit(0)
    })
  })
}
['SIGUSR1', 'SIGINT', 'SIGTERM', 'SIGPIPE', 'SIGHUP', 'SIGBREAK'].forEach((sigName) => {
  process.on(sigName, interrupt(sigName))
})
