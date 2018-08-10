import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'
import Button from './Button'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 2em;
  max-width: 500px;
`
const FormTitle = styled.h3`
  text-align: center;
  margin-bottom: ${props => props.theme.margin};
`

class AddForm extends React.Component {
  state = {
    space: {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    console.log('new space', this.state.name)
  }

  render() {
    return (
      <FormWrapper>
        <FormTitle>Add new space</FormTitle>
        <TextField placeholder="name" name="name" />
        <TextField placeholder="location" name="location" />
        <TextField placeholder="rating" name="rating" />
        <TextField placeholder="photo" name="photo" />
        <Button>Save</Button>
      </FormWrapper>
    )
  }
}
export default AddForm
