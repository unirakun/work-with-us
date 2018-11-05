import React from 'react'
import styled from 'styled-components'
import Summary from './summary'
import Experience from './experience'

const Experiences = ({ className, children }) => (
  <div className={className}>
    <h1>Expériences</h1>

    <Summary columns={2}>{children}</Summary>

    {children.map(experience => <Experience {...experience} />)}
  </div>
)

export default styled(Experiences)`
  grid-area: experiences;
  margin: 0 auto;

  & > h1 {
    text-align: center;
    margin: 0 auto;
  }

  & > ${Experience} {
    max-width: 70em;
    margin: 10em auto;
  }
`
