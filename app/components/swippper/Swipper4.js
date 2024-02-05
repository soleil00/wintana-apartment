'use client'

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Stack } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Swipper4 = () => {
  const [coords, setCoords] = useState([]);

  const getMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('User Location:', position.coords.latitude, position.coords.longitude);
          setCoords([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getMyLocation();
  }, []);

  const markerIcon = new L.Icon({
    iconUrl: '/icons/user.webp',
    iconSize: [35, 50],
  });
  const markerIcon2 = new L.Icon({
    iconUrl: '/icons/wintana.webp',
    iconSize: [35, 50],
  });

  return (
    <Stack
      height="400px"
      position="relative"
      zIndex={1000}
      marginTop="30px"
    >
      <MapContainer
        center={coords && coords.length ? coords : [-1.932432, 30.1362107]}
        zoom={13}
        style={{ width: '100%', height: '400px' }}
        scrollWheelZoom={true}
      >
        {/* TileLayer for the map */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Marker with Popup */}
        {coords.length && (
          <>
            <Marker position={coords} icon={markerIcon}>
              <Popup>You&apos;re here</Popup>
            </Marker>
            <Marker position={[-1.9532, 30.1156]} icon={markerIcon2}>
              <Popup>Wintana is Here</Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </Stack>
  );
};

export default Swipper4;