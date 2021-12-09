import React from 'react';
import { GoogleMap, LoadScript, InfoBox, Marker } from '@react-google-maps/api';

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

const options = { closeBoxURL: '', enableEventPropagation: true };

const onLoad = (infoBox) => {
  console.log('infoBox: ', infoBox);
};

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAU7oHPj92fxgzUEeaoIEv4WqQYOBWxOJ8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={position} />
        <InfoBox onLoad={onLoad} options={options} position={center}>
          <div
            style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}
          >
            <div style={{ fontSize: 16, fontColor: `#08233B` }}>
              Hello, World!
            </div>
          </div>
        </InfoBox>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
