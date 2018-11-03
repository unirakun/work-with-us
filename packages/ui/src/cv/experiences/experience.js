import React, { Fragment } from 'react'
import styled from 'styled-components'
import { CompagnyLogo } from '../../components'

const Title = styled.h1`
  display: flex;
  align-items: center;

  & ${CompagnyLogo} {
    margin-right: 1em;

    &:first-child {
      margin-left: auto;
    }
  }
`

const Date = ({ children }) => new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long" }).format(children)

const Experience = (props) => {
  const {
    className,
    title,
    client,
    dates,
    informations = [],
  } = props

  const {
    from,
    to
  } = dates

  return (
    <div className={className}>
      <Title>
        {title}
        {client && <CompagnyLogo {...client}  src={client.logo} />}
        <CompagnyLogo {...props.for} src={props.for.logo} />
      </Title>
      <h2>
      {/* || (props.for && props.for.name)} */}
        {client && client.name ?
          (
            <Fragment>
              {client.name}
              {', pour le compte de '}
              {props.for.name}
            </Fragment>
          )
          : (
            props.for && props.for.name
          )
        }
        {' • '}
        <Date>{from}</Date>
        {' ➤ '}
        <Date>{to}</Date>
      </h2>
      <ul>
        {informations.map(information => (
          <li key={information} dangerouslySetInnerHTML={{ __html: information.replace(/\n/g, '<br />')}} />
        ))}
      </ul>
    </div>
  )
}

export default styled(Experience)`
  padding: 1em;
`
