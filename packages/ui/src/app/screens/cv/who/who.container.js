import { graphql } from '@work-with-us/ui-hoc'
import Component from './who'
import request from './who.request'

const mapData = (data) => {
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
