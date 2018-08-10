import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.typography.primaryTextSize};
  text-decoration: none;
  font-weight: bold;
  margin-right: ${props => props.theme.margin}
  &:hover {
    color: ${props => props.theme.accent};
  }
`

const NavLink = props => <StyledLink to={props.to}>{props.text}</StyledLink>

export default NavLink
