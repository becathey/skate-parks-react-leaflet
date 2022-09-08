import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import * as parkData from './assets/skate-parks.json'
import './App.css'

function App() {
  return (
    <div className="App">
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
            ]}
          >
            <Popup 
              position={[
                park.geometry.coordinates[1],
                park.geometry.coordinates[0]
              ]}
            >
              <div>
                <h2>{park.properties.NAME}</h2>
                <p>{park.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App
