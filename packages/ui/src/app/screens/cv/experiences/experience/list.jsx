import React, { Fragment } from 'react'
import styled from 'styled-components'

const getKey = (item) => {
  if (Array.isArray(item)) return `${getKey(item[0])}-array`
  return item.text
}

const List = ({ children, className }) => (
  <ul className={className}>
    {(children || []).map(item => (
      <Fragment key={getKey(item)}>
        <li dangerouslySetInnerHTML={{ __html: item.text.replace(/\n/g, '<br />') }} />
        {item.children && <List>{item.children}</List>}
      </Fragment>
    ))}
  </ul>
)

export default styled(List)`
  text-align: justify;
`
