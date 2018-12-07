import { graphql } from '@work-with-us/ui-hoc'
import Component from './showcase'

const request = `query getShowcase {
  showcase {
    clientQuotes {
      name
      quote
    }
  }
}`

const mapData = data => ({ children: data.showcase })

export default graphql(request, { mapData })(Component)
