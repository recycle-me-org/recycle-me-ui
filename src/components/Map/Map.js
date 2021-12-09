import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker/Marker';

const Map = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 39.742043,
      lng: -104.991531,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAU7oHPj92fxgzUEeaoIEv4WqQYOBWxOJ8' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Map lat={59.955413} lng={30.337844} text="My Marker" />
        <Marker lat={59.955413} lng={30.337844} />
      </GoogleMapReact>
    </div>
  );
}

// const Marker = () => {
//   return (
//     <>
//       <div className="pin"></div>
//       <div className="pulse"></div>
//     </>
//   );
// };

// export { Map, Marker };
