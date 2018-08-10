import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

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
  render() {
    const { workspaces } = this.props
    return (
      <div>
        <Navbar />
        <Container>
          <CardsWrapper>
            <ul>
              {Object.keys(workspaces).map(key => (
                <SpaceCard key={key} details={workspaces[key]} />
              ))}
            </ul>
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
  return { workspaces: state.workspaces }
}

export default connect(mapStateToProps)(Explore)
