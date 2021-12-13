import React, { useState } from 'react';
import './Map.css';
import placeDetails from '../../placeDetails.js';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

require('dotenv').config();
const mapsApiKey = process.env.REACT_APP_MAP_KEY;

const markers = [
  {
    id: 1,
    name: placeDetails.result.name,
    position: {
      lat: placeDetails.result.geometry.location.lat,
      lng: placeDetails.result.geometry.location.lng,
    },
  },
];

const containerStyle = {
  width: '800px',
  height: '400px',
};

const center = {
  lat: -33.866489,
  lng: 151.1958561,
};

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  console.log('name', placeDetails.result.name);

  return (
    <LoadScript googleMapsApiKey={mapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div className="info-window">
                  <h1>{placeDetails.result.name}</h1>
                  <p>{placeDetails.result.formatted_address}</p>
                  <p>{placeDetails.result.formatted_phone_number}</p>
                  <p>{placeDetails.result.website}</p>
                </div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
