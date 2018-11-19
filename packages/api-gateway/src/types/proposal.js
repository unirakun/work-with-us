const proposal = (isInput) => {
  const prefix = isInput ? 'Input' : ''

  return `{
    title: String!
    dailyRate: Int
    both: Boolean
    contact: ${prefix}Contact!
  }`
}

module.exports = `
  type Proposal ${proposal(false)}
  input InputProposal ${proposal(true)}
`
