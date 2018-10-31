import React from 'react'
import styled from 'styled-components'
import Experience from './experience'

const Experiences = ({ className, children }) => (
  <div className={className}>
    {children.map(experience => (
      <Experience
        key={experience.title}
        {...experience}
      />
    ))}
  </div>
)

export default styled(Experiences)`
  grid-area: experiences;
`
