import React from 'react';
import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '400px',
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

const position = {
  lat: 37.772,
  lng: -122.214,
};
const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const onLoad = (infoWindow) => {
  console.log('infoWindow: ', infoWindow);
};

function RecyclingLocationMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAU7oHPj92fxgzUEeaoIEv4WqQYOBWxOJ8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={position} />
        <InfoWindow onLoad={onLoad} position={position}>
          <div style={divStyle}>
            <h1>Name</h1>
            <h2>Address</h2>
          </div>
        </InfoWindow>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(RecyclingLocationMap);
