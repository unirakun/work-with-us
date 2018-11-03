import React from 'react'
import styled from 'styled-components'
import Experience from './experience'

const Experiences = ({ className, children }) => (
  <div className={className}>
    <h1>Expériences</h1>
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
  max-width: 70em;
  margin: 0 auto;

  & > h1 {
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.Dark};
    padding: 1em;
    margin: 2em auto;
    width: 15em;
    padding-bottom: 1em;
    margin-top: 0;
  }
`
