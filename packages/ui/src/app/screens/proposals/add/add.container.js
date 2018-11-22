import { graphql } from '@work-with-us/ui-hoc'
import Component from './add'

const mutation = `mutation AddProposal($input : InputProposal!) {
  addProposal(input: $input)
}`

export default graphql(mutation)(Component)
