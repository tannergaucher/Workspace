import React from 'react'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import GoogleMap from '../components/GoogleMap'
import AddForm from '../components/AddForm'

const Container = styled.div`
  display: flex;
`
const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    order: 2;
  }
`
const MapWrapper = styled.div`
  flex: 1;
`

const Add = () => (
  <div>
    <Navbar />
    <Container>
      <FormWrapper>
        <AddForm />
      </FormWrapper>
      <MapWrapper>
        <GoogleMap />
      </MapWrapper>
    </Container>
  </div>
)

export default Add
