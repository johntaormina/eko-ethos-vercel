import { LatLng } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png';
import { Store } from './Data';

export default function Map(center: LatLng, stores: Store[]) {
  return (
    <div>
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: '40vh', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {stores.map((store) => (
          <Marker
            key={store.name}
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
            position={store.location}
            eventHandlers={{
              click: () => {
                console.log('Marker clicked');
              }
            }}
          >
            <Popup>
              {store.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
