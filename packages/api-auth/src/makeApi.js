import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import logger from '@work-with-us/logger'

const verify = promisify(jwt.verify)

const getPayload = secret => token => verify(token, secret)

const getRole = secret => async (authorization) => {
  if (!authorization) return 'VIEWER'

  try {
    const { role } = await getPayload(secret)(authorization.replace('Bearer ', ''))
    return role
  } catch (ex) {
    logger.error('error while reading jwt', JSON.stringify(ex, null, 2))
    logger.info('request is processed as VIEWER')
    return 'VIEWER'
  }
}

export default () => {
  const { JWT_SECRET } = process.env
  if (!JWT_SECRET) throw new Error('JWT_SECRET must be set')

  return {
    getRole: getRole(JWT_SECRET),
  }
}
