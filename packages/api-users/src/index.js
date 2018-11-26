import { create } from '@work-with-us/storage'

export default () => { // TODO: pass a mapping function as parameter
  const users = create('users')()

  return {
    ...users,
    list: async () => {
      const list = await users.list()

      return list.map(user => ({
        ...user,
        fullName: user.displayName,
      }))
    },
  }
}
