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
                  <h1>{name}</h1>
                  <p>{address}</p>
                  <p>{phone}</p>
                  <a target="_blank" rel="noreferrer" href={url}>
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

// let placesData

// Promise.all(placeIds.map(({ placeId }) => {
//   console.log('placeId: ', placeId)
//   return fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}`)
//     .then(res => {
//       console.log('res: ', res);
//       if (res.ok) {
//         return res.text();
//       } else {
//         throw Error('Google Places API responded with an error');
//       }
//     })
//     .then(data => {
//       console.log('apiData: ', data);
//       return data ? JSON.parse(data) : {}
//     })
// }))
//   .then(placesResults => {
//     placesData = placesResults
//     console.log('placesData: ', placesData);
//   })

// fetch(`https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyCgPSzJ7PynNjd_zw7rd4hMOXaJQxhXQdQ`,
//   { mode: 'no-cors' }
// )
//   .then(res => res.json())
//   .then(data => console.log('data: ', data))

// var axios = require('axios');

// var config = {
//   method: 'get',
//   mode: 'no-cors',
//   url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=AIzaSyCgPSzJ7PynNjd_zw7rd4hMOXaJQxhXQdQ',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
