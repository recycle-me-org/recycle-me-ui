import { gql } from '@apollo/client';

export const placeIdQuery = gql`
  query searchLocations($materialId: String!, $location: String!) {
    searchLocations(materialId: $materialId, location: $location) {
        placeId
    }
  }
` 