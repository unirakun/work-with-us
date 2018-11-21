import { graphql } from '@work-with-us/ui-hoc'
import Component from './who'

const request = `query getWho ($name: String!) {
  cvs (name: $name) {
    who {
      name
      avatar
      otherCode
      otherAvatar
      what
      birthday
      worksSince
      socials {
        name,
        url
      }
    }
    skills {
      name
      skills {
        name
        note
      }
    }
  }
}`

const mapData = (data, { loading }) => {
  if (loading) return {}

  const {
    who,
    skills,
  } = data.cvs[0]

  return {
    who,
    skills,
  }
}

export default graphql(request, { mapData })(Component)
