const who = `{
  avatar: String
  name: String!
  what: String
  birthday: Float
  worksSince: Float
  socials: [Social]
}`

module.exports = `
  type Who ${who}
`
