import React from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ClickHandler = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });
  return null;
};

const MapPicker = ({ position, setPosition }) => {
  return (
    <div className="bg-white p-3 h-full flex flex-col min-h-[400px]">
      <div className="w-full flex-1 rounded-[2rem] overflow-hidden z-0 border border-slate-100">
        <MapContainer 
          center={position} 
          zoom={13} 
          zoomControl={false} 
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <ClickHandler setPosition={setPosition} />
          {position && <Marker position={position} />}
        </MapContainer>
      </div>
      
      <div className="p-4 flex items-center justify-between">
        <span className="text-sm text-slate-400 font-helvetica">
          Klik pada area peta untuk menandai lokasi lahan
        </span>
      </div>
    </div>
  );
};

export default MapPicker;