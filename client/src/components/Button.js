import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(Button)`
  && {
    font-family: ${props => props.theme.typography.primaryFont};
    margin-top: ${props => props.theme.margin};
  }
`

export default StyledButton
