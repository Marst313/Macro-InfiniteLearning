import React from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const updatePopupCss = (color) => {
    console.log(color);
  };

  return (
    <MapContainer center={[-8.58056, 121.57333]} zoom={15} id="map">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-8.58056, 121.57333]}>
        <Popup>Sedang Di Perbaiki</Popup>
      </Marker>

      <Marker position={[-8.62679, 121.54249]}>
        <Popup className="text-red-500">Selesai Di Perbaiki</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
