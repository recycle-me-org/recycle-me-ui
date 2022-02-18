import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import MaterialsDropdown from '../MaterialsDropdown/MaterialsDropdown';
import './SearchBar.css';

const SearchBar = ({ updateLocationDetails }) => {
  const [materialId, setMaterialId] = useState('');
  const [location, setLocation] = useState('');

  const updateMaterialId = (id) => setMaterialId(id);

  const GET_LOCATION_DETAILS = gql`
    query searchLocations($materialId: String!, $location: String!) {
      searchLocations(materialId: $materialId, location: $location) {
        name
        long
        lat
        hours
        phone
        url
        distance
        address
      }
    }
  `;

  const [getLocationDetails, { loading, error }] =
    //ASYNC query through apollo, executes when you click search button rather than page load
    useLazyQuery(GET_LOCATION_DETAILS);

  const handleChange = (e) => {
    const locationInput = e.target.value;
    setLocation(locationInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Once we have material ID and location we call getLocationDetails
    const newLocationDetails = await getLocationDetails({
      variables: {
        materialId: materialId,
        location: `${location}, United States`,
      },
    });
    updateLocationDetails(newLocationDetails);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="search-bar">
        <MaterialsDropdown updateMaterialId={updateMaterialId} />
        <div className="search-bar__input-container search-bar__input-container--zip">
          <input
            className="search-bar__input"
            type="text"
            name="location"
            value={location}
            aria-label="location"
            placeholder="enter zipcode"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <button className="search-bar__button">Search</button>
      </form>
      {loading && <p className="error-message">Loading...</p>}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default SearchBar;
