const path = require('path')
const Koa = require('koa')
const serve = require('koa-static')
const GraphQL = require('./graphql')
const react = require('./react')

const app = new Koa()
const graphql = GraphQL(app)

const staticPath = path.resolve(__dirname, '../../ui/build')
app.use(react)
app.use(serve(staticPath))

const port = 4000
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`🚀 Server ready at http://${host}:${port}${graphql.graphqlPath}`)
  console.log(`🍛 Serving ${staticPath}`)
  console.timeEnd('start-server')
})
