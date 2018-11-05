import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
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
            <li key={`#${experience.title}-${experience.dates.from}`}>
              <AnchorLink href={`#${experience.title}-${experience.dates.from}`} offset="100">
                {experience.title}
                <div> {(experience.client || experience.for).name}</div>
              </AnchorLink>
            </li>
          ))
        }
      </ul>

      <ul>
        {children
          .filter((_, index) => !(index <= children.length / 2))
          .map(experience => (
            <li key={`#${experience.title}-${experience.dates.from}`}>
              <AnchorLink href={`#${experience.title}-${experience.dates.from}`} offset="100">
                {experience.title}
                <div> {(experience.client || experience.for).name}</div>
              </AnchorLink>
            </li>
          ))
        }
      </ul>
      <div className="shadow bottom" />
    </div>

    {children.map(experience => (
      <Experience
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

    @media print {
      display: none;
    }

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

        & > a {
          color: inherit;
          text-decoration: none;
          transition: transform 500ms ease-in-out;
          display: block;

          &:hover {
            transform: scale(1.1);
          }

          & > div {
            font-size: .8em;
            color: #9a9a9a;
            margin-top: 0.5em;
          }
        }
      }
    }
  }

  & > ${Experience} {
    max-width: 70em;
    margin: 10em auto;
  }
`
