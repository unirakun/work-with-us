const proposal = (isInput) => {
  const prefix = isInput ? 'Input' : ''

  return `{
    ${isInput ? '' : 'id: String!'}
    ${isInput ? '' : 'date: Float!'}
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
