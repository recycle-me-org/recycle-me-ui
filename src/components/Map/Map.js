import React, { useState } from 'react';
import './Map.css';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

require('dotenv').config();
const mapsApiKey = 'AIzaSyAZ99QUgy8TMNeFtgweozdymf5IUgbzEtE';

const containerStyle = {
  width: '100%',
  height: '700px',
};

const Map = ({ locationDetails }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const locationDetailsExist = locationDetails.data?.searchLocations?.length;
  //If there are location details then the code will execute to create custom map markers
  let centerCoords = { lat: 44.6714, lng: -103.8521 };
  let markersData = [];
  if (locationDetailsExist) {
    markersData = locationDetails.data.searchLocations.map(
      (location, index) => {
        const newLocation = {
          id: location.address,
          name: location.name,
          position: { lat: location.lat, lng: location.long },
          phone: location.phone,
          address: location.address,
          url: location.url,
        };
        if (!index) {
          centerCoords = newLocation.position;
        }
        return newLocation;
      }
    );
  }

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
        zoom={locationDetailsExist ? 10 : 4.5}
      >
        {markersData.length > 0 &&
          markersData.map(({ id, name, position, phone, address, url }) => (
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
