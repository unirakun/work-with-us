import { graphql } from '@work-with-us/ui-hoc'
import Component from './showcase'

const request = `query getProposals {
  proposals {
    title
    contact {
      email
    }
  }
}`

const mapData = data => ({ children: data.proposals })

export default graphql(request, { mapData })(Component)
