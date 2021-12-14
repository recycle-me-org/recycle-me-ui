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
    position: placeDetails.result.geometry.location,
  },
];

const containerStyle = {
  width: '100%',
  height: '600px',
};

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <LoadScript googleMapsApiKey={mapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={placeDetails.result.geometry.location}
        zoom={12}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div className="info-window">
                  <h1>{name}</h1>
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
