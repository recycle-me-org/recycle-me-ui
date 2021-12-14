import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import MaterialsDropdown from '../MaterialsDropdown/MaterialsDropdown';
import './SearchBar.css';

const SearchBar = ({ updatePlaceIds }) => {
  const [materialId, setMaterialId] = useState('');
  const [location, setLocation] = useState('');

  const updateMaterialId = (id) => setMaterialId(id);

  const GET_PLACE_IDS = gql`
    query searchLocations($materialId: String!, $location: String!) {
      searchLocations(materialId: $materialId, location: $location) {
        placeId
      }
    }
  `;

  const [getPlaceIds, { loading, error, data }] = useLazyQuery(GET_PLACE_IDS);
  
  const handleChange = (e) => {
    const locationInput = e.target.value;
    setLocation(locationInput);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const placeIds = getPlaceIds({ variables: { materialId: materialId, location: `${location}, United States` }});
    updatePlaceIds(placeIds);
  };

  return (
    <>
      { loading && <p>Loading...</p> }
      { error && <p>{ error.message }</p> }
      { data && console.log('data: ', data) }
      <form onSubmit={ (e) => handleSubmit(e) } className="search-bar" >
        <MaterialsDropdown updateMaterialId={ updateMaterialId } />
        <div className="search-bar__input-container search-bar__input-container--zip">
          <input
            className="search-bar__input"
            type="text"
            name="location"
            value={location}
            aria-label="location"
            placeholder="location"
            onChange={ (e) => handleChange(e) }
          >
          </input>
        </div>
        <button className="search-bar__button">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
