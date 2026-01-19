import { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon.src || icon,
  shadowUrl: iconShadow.src || iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Komponen untuk menangani event drag/click pada map
const DraggableMarker = ({ position, setPosition, onLocationChange }) => {
  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const newPos = marker.getLatLng();
          setPosition(newPos);
          onLocationChange({ lat: newPos.lat, lng: newPos.lng });
        }
      },
    }),
    [onLocationChange, setPosition]
  );

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup>Geser marker ke lokasi lahanmu</Popup>
    </Marker>
  );
};

const LocationPicker = ({ onLocationChange }) => {
  const [position, setPosition] = useState({ lat: -7.790595, lng: 110.369490 });

  return (
    <div className="h-[300px] w-full rounded-2xl overflow-hidden border border-slate-200 relative z-0">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DraggableMarker 
            position={position} 
            setPosition={setPosition} 
            onLocationChange={onLocationChange} 
        />
      </MapContainer>
      
     
      <div className="absolute bottom-2 left-2 bg-white/90 px-3 py-1 rounded-md text-xs font-mono z-[400] shadow-sm">
        Lat: {position.lat.toFixed(4)}, Lng: {position.lng.toFixed(4)}
      </div>
    </div>
  );
};

export default LocationPicker;