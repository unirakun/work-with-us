const mount = require('koa-mount')
const session = require('koa-session')
const grant = require('grant-koa')
const koaqs = require('koa-qs')
const got = require('got')
const jwt = require('jsonwebtoken')
const createUsers = require('@work-with-us/api-users').default
const logger = require('@work-with-us/logger')
const config = require('./config')

const {
  JWT_SECRET,
} = process.env

if (!JWT_SECRET) throw new Error('JWT_SECRET must be set')

// TODO: use promisify
const getToken = payload => new Promise((resolve, reject) => {
  jwt.sign(payload, JWT_SECRET, { expiresIn: '2 days' }, (err, token) => {
    if (err) {
      reject(err)
      return
    }

    resolve(token)
  })
})

module.exports = (app) => {
  koaqs(app)

  if (!app.keys) app.keys = [] // eslint-disable-line no-param-reassign
  app.keys.push('grant')

  app.use(session(app))
  app.use(mount(grant(config)))

  const users = createUsers()

  app.use(async (ctx, next) => {
    if (ctx.path === '/google_callback') {
      logger.debug('someone trying to connect')
      const response = await got(
        'https://content.googleapis.com/plus/v1/people/me',
        {
          json: true,
          headers: {
            authorization: `Bearer ${ctx.query.access_token}`,
          },
        },
      )

      // check user by its id (google id)
      logger.debug('google user found', response.body.displayName)
      const olderUser = await users.get(response.body.id)
      if (!olderUser) {
        logger.warn('user is not authorized!', response.body.displayName)
        ctx.status = 403
        return
      }

      logger.debug('generating a new token', response.body.displayName)
      const token = await getToken({ role: 'ADMIN' })

      const { displayName, ...user } = response.body
      await users.addOrUpdate({
        ...user,
        fullName: displayName,
        oauth: ctx.query,
      })

      ctx.body = token
    } else {
      await next()
    }
  })
}
