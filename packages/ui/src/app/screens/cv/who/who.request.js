export default `query getWho ($name: String!) {
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
