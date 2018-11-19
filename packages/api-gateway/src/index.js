const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const GraphQL = require('./graphql')

const app = new Koa()
const graphql = GraphQL(app)

const staticPath = path.resolve(__dirname, '../../ui/build')
app.use(async (ctx, next) => {
  const react = require('./react') // eslint-disable-line global-require
  return react(ctx, next)
})
app.use(serve(staticPath))

const port = 4000
const host = '::'

app.listen(port, host, () => {
  console.log(`🚀 Server ready at http://${host}:${port}${graphql.graphqlPath}`)
  console.log(`🍛 Serving ${staticPath}`)
  console.timeEnd('start-server')
})
