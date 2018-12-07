import mount from 'koa-mount'
import session from 'koa-session'
import grant from 'grant-koa'
import koaqs from 'koa-qs'
import createAuthenticate from './authenticate'
import createConfig from './config'

export default (app) => {
  koaqs(app)

  if (!app.keys) app.keys = [] // eslint-disable-line no-param-reassign
  app.keys.push('grant')

  app.use(session(app))
  app.use(mount(grant(createConfig())))

  const authenticate = createAuthenticate()

  app.use(async (ctx, next) => {
    if (ctx.path === '/google_callback') {
      const { access_token, id_token } = ctx.query // eslint-disable-line camelcase
      const tokens = { access_token, id_token }

      const token = await authenticate(tokens)
      if (!token) {
        ctx.status = 403
        return
      }

      ctx.body = token
    } else {
      await next()
    }
  })
}
