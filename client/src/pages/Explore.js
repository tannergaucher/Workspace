import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'

import { workspacesFetch } from '../actions'

import Navbar from '../components/Navbar'
import GoogleMap from '../components/GoogleMap'
import SpaceCard from '../components/Card'

const Container = styled.div`
  display: flex;
  background: papayawhip;
`
const CardsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
`
const MapWrapper = styled.div`
  flex: 1;
`

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchData('/getWorkspaces')
  }

  render() {
    const { workspaces, hasErrored, isLoading } = this.props

    // if (hasErrored) {
    //   return <p>error loading workspaces</p>
    // }

    if (isLoading) {
      return <p>loading workspaces</p>
    }

    return (
      <div>
        <Navbar />
        <Container>
          <CardsWrapper>
            {Object.keys(workspaces).map(key => (
              <SpaceCard key={key} details={workspaces[key]} />
            ))}
          </CardsWrapper>
          <MapWrapper>
            <GoogleMap />
          </MapWrapper>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    workspaces: state.workspaces,
    hasErrored: state.workspacesHasErrored,
    isLoading: state.workspacesIsLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: url => dispatch(workspacesFetch(url))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore)
