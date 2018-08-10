import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

const StyledTextField = styled(TextField)`
  & .MuiInput-input-9 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-family: ${props => props.theme.typography.primaryFont};
  }
  & .MuiInput-underline-5:after {
    border-bottom: 2px solid ${props => props.theme.accent};
  }
`

export default StyledTextField
