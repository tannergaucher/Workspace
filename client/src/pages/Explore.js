import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import GoogleMap from '../components/GoogleMap'

const Container = styled.div`
  display: flex;
  background: papayawhip;
`
const CardsWrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MapWrapper = styled.div`
  flex: 1;
`

const Explore = () => (
  <div>
    <Navbar />
    <Container>
      <CardsWrapper>Cards here</CardsWrapper>
      <MapWrapper>
        <GoogleMap />
      </MapWrapper>
    </Container>
  </div>
)

export default Explore
