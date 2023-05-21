import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const Map = ({ coordinates }) => {
    const { latitude, longitude, name, description } = coordinates
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={12}
            style={{ height: '400px', width: '100%' }}
        >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    Location name:{name}
                    <br />
                    Location description:{description}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
