import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Search from './Search'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  background: linear-gradient(162deg, #fd267d, #ff7854);
  padding: 1em;
  position: sticky !important;
  top: 0 !important;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.typography.primaryTextSize};
  text-decoration: none;
  font-weight: bold;
  margin-right: ${props => props.theme.margin}
  &:hover {
    opacity: .8;
  }
`

const title = 'work{Space}'

const Navbar = () => (
  <Nav>
    <NavLink to="/">{title}</NavLink>
    <Search />
    <div>
      <NavLink to="/add">Add</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  </Nav>
)

export default Navbar
