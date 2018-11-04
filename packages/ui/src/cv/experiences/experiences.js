import React from 'react'
import styled from 'styled-components'
import Experience from './experience'

const Experiences = ({ className, children }) => (
  <div className={className}>
    <h1>Expériences</h1>
    <div className="summary">
      <div className="shadow top" />
      <div className="background" />

      <ul>
        {children
          .filter((_, index) => index <= children.length / 2)
          .map(experience => (
            <li>
              {experience.title}
              <div> {(experience.client || experience.for).name}</div>
            </li>
          ))
        }
      </ul>

      <ul>
        {children
          .filter((_, index) => !(index <= children.length / 2))
          .map(experience => (
            <li>
              {experience.title}
              <div> {(experience.client || experience.for).name}</div>
            </li>
          ))
        }
      </ul>
      <div className="shadow bottom" />
    </div>

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
  margin: 0 auto;

  & > h1 {
    text-align: center;
    margin: 0 auto;
  }

  & > .summary {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4em 0;
    padding: 3em 0;
    position: relative;
    width: 100vw;

    & > .background {
      background-color: #f3f3f3;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }

    & > .shadow.top {
      box-shadow: 0 0 2em -0.4em #565656;
      width: 70%;
      height: 1em;
      z-index: 0;
      position: absolute;
      top: 0;
    }

    & > .shadow.bottom {
      box-shadow: 0 0 2em -0.4em #565656;
      width: 70%;
      height: 1em;
      z-index: 0;
      position: absolute;
      bottom: 0;
    }

    & ul {
      width: 25em;
      list-style: none;
      padding: 0;
      z-index: 20;
      margin: 0 2em;

      & > li {
        padding: 1em;
        text-align: center;

        & > div {
          font-size: .8em;
          color: #9a9a9a;
          margin-top: 0.5em;
        }
      }
    }
  }

  & > ${Experience} {
    max-width: 70em;
    margin: 10em auto;
  }
`
