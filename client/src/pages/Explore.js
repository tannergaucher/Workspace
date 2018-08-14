import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import StyledLink from '../components/StyledLink'

import { fetchWorkspaces } from '../actions'
import Navbar from '../components/Navbar'
import GoogleMap from '../components/GoogleMap'
import SpaceCard from '../components/Card'

const Container = styled.div`
  display: flex;
  background: ${props => props.theme.secondary};
`
const CardsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: ${props => props.theme.margin};
`
const MapWrapper = styled.div`
  flex: 0 0 400px;
  height: calc(100vh - 64);
  & .kRvYkj {
    height: calc(100vh - 64px);
    position: sticky !important;
    top: 64px !important;
  }
`

class Explore extends React.Component {
  componentDidMount() {
    this.props.fetchWorkspaces()
  }

  render() {
    const { workspaces } = this.props

    if (!workspaces) {
      return <p>loading</p>
    }
    return (
      <div>
        <Navbar />
        <Container>
          <CardsWrapper>
            {Object.keys(workspaces).map(key => (
              <StyledLink key={key} to={`/getWorkspace/${workspaces[key]._id}`}>
                <SpaceCard details={workspaces[key]} />
              </StyledLink>
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
  return { workspaces: state.workspaces }
}

export default connect(
  mapStateToProps,
  { fetchWorkspaces }
)(Explore)
