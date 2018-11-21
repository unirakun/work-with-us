const who = `{
  avatar: String
  otherAvatar: String
  otherCode: String!
  name: String!
  what: String
  birthday: Float
  worksSince: Float
  socials: [Social]
}`

module.exports = `
  type Who ${who}
`
