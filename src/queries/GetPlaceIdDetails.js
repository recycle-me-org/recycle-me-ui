import { gql } from '@apollo/client';
require('dotenv').config();
const mapsApiKey = process.env.REACT_APP_MAP_KEY;

var axios = require('axios');

var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name%2Crating%2Cformatted_phone_number&key=${mapsApiKey}`,
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
