import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: ${props => props.theme.margin};
  &:hover {
    opacity: 0.6;
  }
`
const Avatar = props => <StyledAvatar src={props.src} />

export default Avatar
