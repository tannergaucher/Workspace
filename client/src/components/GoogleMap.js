import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: calc(100vh - 65px);
  flex-grow: 1;
`

class GoogleMap extends React.Component {
  render() {
    const center = {
      lat: 48.8,
      lng: 2.35
    }

    return (
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCEXqXUNN1CYIFCTWSCc1-cHFznDY61zPY' }}
          center={center}
          defaultCenter={center}
          defaultZoom={13}
        />
      </MapContainer>
    )
  }
}

export default GoogleMap
