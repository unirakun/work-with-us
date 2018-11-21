import React from 'react'

const Proposals = ({ children }) => (
  <ul>
    {children.map(({ title, contact }) => (
      <li>
        {`${title} - (${contact.email})`}
      </li>
    ))}
  </ul>
)

export default Proposals
