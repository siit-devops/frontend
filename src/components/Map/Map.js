import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const Map = ({ latitude, longitude, zoom, markerContent }) => {
  useEffect(() => {
    const map = L.map("map").setView([latitude, longitude], zoom);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    var icon = L.icon({
      iconUrl: '/icon.png',
      iconSize: [32, 32],               
      iconAnchor: [16, 32],
      popupAnchor: [0, -36]              
    });

    L.marker([latitude, longitude])
      .setIcon(icon)
      .addTo(map)
      .bindPopup(markerContent);

    

    return () => {
      map.remove();
    };
  }, [latitude, longitude, zoom, markerContent]);

  return <div id="map" style={{ width: "500px", height: "400px" }}></div>;
};

export default Map;
