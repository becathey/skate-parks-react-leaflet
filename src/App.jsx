// import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import * as parkData from './assets/skate-parks.json'
import './App.css'

function App() {
  // const [map, setMap] = useState(null)
  // useEffect(() => {
  //   if (!map) return
  //   map.setView([34.74161249883172, 18.6328125], 2)
  // }, [map])
  return (
    <div className="App">
      {/* <MapContainer 
        center={[51.505, -0.09]}
        zoom={13}
        style={{height: "100vh"}}
        ref={setMap}
      /> */}
      <MapContainer style={{height: '100%', width: '100%'}} center={[45.31535558124887, -75.69539230092572]} zoom={9} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {parkData.features.map(park => (
          <Marker 
            key={park.properties.PARK_ID}
            position={[
              park.geometry.coordinates[1],
              park.geometry.coordinates[0]
            ]}>
              <Popup>
                {park.properties.NAME}
              </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App
