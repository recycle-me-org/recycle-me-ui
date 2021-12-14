import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from '../src/components/App/App';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://recycle-me-api.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

// client.query({
//   query: gql`
//     query searchLocations {
//       searchLocations(materialId: "60", location: "94549, United States") {
//         name
//         lat
//         long
//       }
//     }
//     `,
//   })
//     .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
