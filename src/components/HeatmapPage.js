import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const HeatmapPage = () => {
  const [data, setData] = useState([]);  // State for storing fetched data
  const [species, setSpecies] = useState('Salmon');  // State for species selection
  const [month, setMonth] = useState('January');  // State for month selection

  useEffect(() => {
    // This effect runs every time species or month changes, refetching the data
    const fetchData = async () => {
      try {
        // Replace this with the actual API call you're using
        const response = await axios.get('https://api.example.com/marine_life', {
          params: { species, month }  // Send species and month as query parameters
        });
        setData(response.data);  // Set the fetched data into state
      } catch (error) {
        console.error('Error fetching data:', error);
        // For demo purposes, we'll use hardcoded data in case of an error
        setData([
          { lat: 48.8566, lng: 2.3522, name: 'Salmon' },
          { lat: 34.0522, lng: -118.2437, name: 'Shark' },
        ]);
      }
    };

    fetchData();  // Fetch the data on component mount or when species/month changes
  }, [species, month]);  // Dependencies to trigger refetch when either species or month changes

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1 style={{ textAlign: 'center', marginTop: '10px' }}>Marine Life Heatmap</h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label>Select Species: </label>
        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="Salmon">Salmon</option>
          <option value="Tuna">Tuna</option>
          <option value="Shark">Shark</option>
        </select>

        <label style={{ marginLeft: '20px' }}>Select Month: </label>
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          {/* Add other months as needed */}
        </select>
      </div>

      <MapContainer center={[0, 0]} zoom={2} style={{ height: '80vh', width: '100vw' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((location, idx) => (
          <CircleMarker
            key={idx}
            center={[location.lat, location.lng]}
            radius={10}
            color="blue"
            fillOpacity={0.5}
          >
            <Popup>
              {location.name} spotted in {month}
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HeatmapPage;
