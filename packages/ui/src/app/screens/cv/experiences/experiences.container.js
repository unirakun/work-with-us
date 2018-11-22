import { graphql } from '@work-with-us/ui-hoc'
import Component from './experiences'

const request = `query getExperiences ($name: String!) {
  cvs(name: $name) {
    experiences {
      title
      client {
        name
        color
      }
      for {
        name
        color
      }
      dates {
        from
        to
      }
      informations {
        text
        children {
          text
          children {
            text
          }
        }
      }
    }
  }
}`

const mapData = data => ({ children: data.cvs[0].experiences })

export default graphql(request, { mapData, wait: true })(Component)
