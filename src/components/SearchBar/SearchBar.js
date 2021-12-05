import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [zip, setZip] = useState('');
  const [materials, setMaterials] = useState([]);
  const [validZip, setValidZip] = useState(true);

  useEffect(() => {
    const zipRegex = new RegExp(/^\d{5}$/)
    const timerId = setTimeout(() => {
      if (zipRegex.test(zip) || !zip.length) {
        setValidZip(true);
      } else {
        setValidZip(false);
      }
    }, 500)

    return () => {
      clearTimeout(timerId);
    }
  }, [zip])

  const handleChange = (e) => {
    const input = e.target;
    if (input.name === 'zip') {
      setZip(input.value);
    }
    if (input.name === 'materials') {
      setMaterials(input.value);
    }
  }

  return (
    <form className="search-bar">
      <input 
        className="search-bar__input search-bar__input--zip"
        type="text"
        name="zip"
        value={ zip }
        aria-label="Zip Code"
        placeholder="ZIP Code"
        onChange={ (e) => handleChange(e) }
      >
      </input>
      <input
        className="search-bar__input search-bar__input--materials"
        type="text"
        name="materials"
        value={ materials }
        aria-label="Material"
        placeholder="Search for a material (plastic bottle, glass, etc.)"
        onChange={ (e) => handleChange(e) }
      >
      </input>
      <button className="search-bar__button">Search</button>
      { !validZip && <h3>Please enter a valid zip code</h3> }
    </form>
  )
};

export default SearchBar;
