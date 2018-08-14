import React from 'react'
import styled from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import TextField from './TextField'
import Button from './Button'
import { createWorkspace } from '../actions'

import history from '../history'
import { withRouter } from 'react-router-dom'

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

const FormField = styled(TextField)``

class AddForm extends React.Component {
  renderField = field => (
    <FormField {...field.input} placeholder={field.label} />
  )

  onSubmit = values => {
    this.props.createWorkspace(values, () => history.push('/'))
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <FormWrapper onSubmit={handleSubmit(this.onSubmit)}>
        <FormTitle>Add new space</FormTitle>
        <Field name="name" label="Name" component={this.renderField} />
        <Field name="location" label="Location" component={this.renderField} />
        <Field name="rating" label="Rating" component={this.renderField} />
        <Field name="image" label="Image" component={this.renderField} />
        <Button type="submit">Save</Button>
      </FormWrapper>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = 'enter a name!'
  }

  if (!values.location) {
    errors.name = 'enter a location!'
  }
  if (!values.rating) {
    errors.name = 'enter a location!'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'AddWorkspaceForm'
})(
  withRouter(
    connect(
      null,
      { createWorkspace }
    )(AddForm)
  )
)
