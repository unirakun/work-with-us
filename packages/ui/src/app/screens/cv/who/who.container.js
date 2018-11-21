import { graphql } from '@work-with-us/ui-hoc'
import Component from './who'

const request = `query getWho {
  cvs {
    code
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

const mapData = (data, props) => {
  const { who, skills } = (data.cvs || []).find(({ code }) => code === props.name)

  return {
    who,
    skills,
  }
}

export default graphql(request, mapData)(Component)
