import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import axios from 'axios';

const MarineSpeciesMap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch occurrence data for Atlantic Salmon (Salmo salar) from GBIF
    axios.get('https://api.gbif.org/v1/occurrence/search?scientificName=Salmo+salar')
      .then(response => {
        // Filter for occurrences with lat/lng data
        const occurrences = response.data.results.filter(item => item.decimalLatitude && item.decimalLongitude);
        setData(occurrences);
      })
      .catch(error => {
        console.error('Error fetching data from GBIF:', error);
      });
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((occurrence, idx) => (
        <CircleMarker
          key={idx}
          center={[occurrence.decimalLatitude, occurrence.decimalLongitude]}
          radius={5}
          color="blue"
          fillOpacity={0.5}
        >
          <Popup>
            <strong>{occurrence.species}</strong><br />
            Location: {occurrence.decimalLatitude}, {occurrence.decimalLongitude}<br />
            Date: {occurrence.eventDate || 'Unknown'}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default MarineSpeciesMap;
