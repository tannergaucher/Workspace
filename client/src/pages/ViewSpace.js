import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SpaceCard from '../components/Card'
import Navbar from '../components/Navbar'

import { fetchWorkspace } from '../actions'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

class ViewSpace extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.fetchWorkspace(id)
  }

  render() {
    const { workspace } = this.props
    console.log('viewspace', workspace)
    console.log(this.props)

    if (!workspace) {
      return <p>loading...</p>
    }
    return (
      <Container>
        <Navbar />
        <SpaceCard details={workspace} />
      </Container>
    )
  }
}

function mapStateToProps({ workspaces }, ownProps) {
  return {
    workspace: workspaces
  }
}

export default connect(
  mapStateToProps,
  { fetchWorkspace }
)(ViewSpace)
