function getCoords(lng, lat) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo)
  }

  function displayLocationInfo(position) {
    lng = position.coords.longitude
    lat = position.coords.latitude

    console.log(`longitude: ${lng} | latitude: ${lat}`)
    return lng, lat
  }
}
