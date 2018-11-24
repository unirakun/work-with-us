const who = `{
  avatar: String
  otherAvatar: String
  otherCode: String!
  fullName: String!
  what: String
  birthday: Float
  worksSince: Float
  socials: [Social]
}`

module.exports = `
  type Who ${who}
`
