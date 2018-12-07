const clientQuote = `{
  name: String!
  quote: String
}`

module.exports = `
  type ClientQuote ${clientQuote}
`
