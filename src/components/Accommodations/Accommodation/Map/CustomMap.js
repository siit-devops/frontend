import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./CustomMap.css";
export const CustomMap = ({ location }) => {
  console.log(location);
  return (
    <MapContainer
      className="map-container"
      center={[location.lat, location.lon]}
      zoom={14}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[location.lat, location.lon]}>
        <Popup>Your Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CustomMap;
