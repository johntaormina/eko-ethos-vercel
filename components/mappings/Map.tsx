import { LatLng, Icon } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';

const positions = {
  Philadlephia: {
    'Moms Organic Market': new LatLng(39.950661, -75.158607)
  }
};

export default function Map() {
  return (
    <div>
      <MapContainer
        center={[39.950661, -75.158607]}
        zoom={13}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41]
            })
          }
          position={positions.Philadlephia['Moms Organic Market']}
          eventHandlers={{
            click: () => {
              console.log('Marker clicked');
            }
          }}
        >
          <Popup>
            
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
