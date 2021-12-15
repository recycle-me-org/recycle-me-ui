import React, { useState } from 'react';
import mockLocationDetails from '../../placeDetails';
import './Map.css';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

require('dotenv').config();
const mapsApiKey = process.env.REACT_APP_MAP_KEY;

const containerStyle = {
  width: '100%',
  height: '700px',
};

const Map = ({ locationDetails }) => {
  console.log('location details', locationDetails);
  const [activeMarker, setActiveMarker] = useState(null);

  const centerCoords = { lat: 41.850033, lng: -87.6500523 };

  const markers = mockLocationDetails.data.searchLocations.map((location) => {
    return {
      id: location.name,
      name: location.name,
      position: { lat: location.lat, lng: location.long },
      phone: location.phone,
      address: location.address,
      url: location.url,
    };
  });

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
        center={activeMarker ? activeMarker.position : centerCoords}
        zoom={5}
      >
        {markers.map(({ id, name, position, phone, address, url }) => (
          <Marker
            key={id}
            position={position}
            onClick={() => handleActiveMarker(id)}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div className="info-window">
                  <h1 className="business-name">{name}</h1>
                  <p className="business-info">{address}</p>
                  <p className="business-info">{phone}</p>
                  <a
                    className="business-info"
                    target="_blank"
                    rel="noreferrer"
                    href={url}
                  >
                    {url}
                  </a>
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
