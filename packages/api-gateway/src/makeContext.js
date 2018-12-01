import makeAuth from '@work-with-us/api-auth'
import makeUsers from '@work-with-us/api-users'
import makeProposals from '@work-with-us/api-proposals'

export default () => {
  const models = {
    auth: makeAuth(),
    proposals: makeProposals(),
    users: makeUsers(),
  }

  return async (config) => {
    const { ctx } = config
    const role = await models.auth.getRole(ctx.request.headers.authorization)

    // TODO: pass logger into context
    // so we can inject wich user is connected and log it by default :)

    return {
      models,
      role: [].concat(role),
    }
  }
}
