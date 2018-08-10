import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import Search from './Search'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  background: ${props => props.theme.primary};
  border-bottom: 1px solid ${props => props.theme.secondary};
  padding: 1em;
`

const Navbar = () => (
  <Nav>
    <NavLink to="/" text="work{Space}" />
    <Search />
    <div>
      <NavLink to="/explore" text="explore" />
      <NavLink to="/add" text="add" />
      <NavLink to="/login" text="log in" />
    </div>
  </Nav>
)

export default Navbar
