import React from 'react'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

const MapContainer = styled.div`
  height: calc(100vh - 64px);
`

class GoogleMap extends React.Component {
  state = {
    lat: 48.8,
    lng: 2.35
  }

  componentDidMount() {}

  render() {
    const center = {
      lat: this.state.lat,
      lng: this.state.lng
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
