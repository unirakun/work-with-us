import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import getId from '../getExperienceId' // TODO: find a way to store this in graphql ? If we can't find a way -> context ?

const Summary = ({ className, children, columns }) => {
  const arrays = []
  const chunk = Math.ceil(children.length / columns)

  for (let i = 0; i < children.length; i += chunk) {
    arrays.push(children.slice(i, i + chunk))
  }

  return (
    <div className={className}>
      <div className="shadow top" />
      <div className="background" />

      {arrays.map(array => (
        <ul key={getId(array)}>
          {array
            .map(experience => (
              <li key={getId(experience)}>
                <AnchorLink href={getId.withHash(experience)} offset="100">
                  {experience.title}
                  <div>{(experience.client || experience.for).name}</div>
                </AnchorLink>
              </li>
            ))
          }
        </ul>
      ))}

      <div className="shadow bottom" />
    </div>
  )
}

export default styled(Summary)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4em 0;
  padding: 3em 0;
  position: relative;
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

  @media print {
    & > .background {
      background-color: white;
    }
  }
`
