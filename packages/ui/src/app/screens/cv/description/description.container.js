import { graphql } from '@work-with-us/ui-hoc'
import Component from './description'

const request = `query getCV ($name: String!) {
  cvs(name: $name) {
    description
  }
}`

const mapData = (data, { loading }) => {
  if (loading) return {}

  return {
    children: data.cvs[0].description,
  }
}

export default graphql(request, { mapData })(Component)
