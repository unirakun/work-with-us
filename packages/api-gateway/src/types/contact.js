const contact = `{
  email: String!
  name: String
}`

module.exports = `
  type Contact ${contact}
  input InputContact ${contact}
`
