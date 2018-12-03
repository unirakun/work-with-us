import { promisify } from 'util'
import got from 'got'
import jwt from 'jsonwebtoken'
import logger from '@work-with-us/logger'
import createUsers from '@work-with-us/api-users'

const sign = promisify(jwt.sign)

const getToken = secret => payload => sign(payload, secret, { expiresIn: '2 days' })

export default () => {
  const {
    JWT_SECRET,
  } = process.env

  if (!JWT_SECRET) throw new Error('JWT_SECRET must be set')

  const users = createUsers()

  return async (tokens) => {
    logger.debug('someone trying to connect')
    const response = await got(
      'https://content.googleapis.com/plus/v1/people/me',
      {
        json: true,
        headers: {
          authorization: `Bearer ${tokens.access_token}`,
        },
      },
    )

    // check user by its id (google id)
    logger.debug('google user found', response.body.displayName)
    const olderUser = await users.get(response.body.id)
    if (!olderUser) {
      logger.warn('user is not authorized!', response.body.displayName)
      return undefined
    }

    logger.debug('generating a new token', response.body.displayName)
    const token = await getToken(JWT_SECRET)({ role: 'ADMIN' })

    const { displayName, ...user } = response.body
    await users.addOrUpdate({
      ...user,
      fullName: displayName,
      oauth: tokens,
    })

    return token
  }
}
