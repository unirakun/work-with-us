import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/fabien">Fabien JUIF</NavLink>
    </li>
    <li>
      <NavLink to="/guillaume">Guillaume CRESPEL</NavLink>
    </li>
    <li>
      <NavLink to="/proposals">Proposals</NavLink>
    </li>
  </ul>
)

export default Navigation
