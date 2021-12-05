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
      <div className="search-bar__input-container search-bar__input-container--zip">
        <input 
          className="search-bar__input"
          type="text"
          name="zip"
          value={ zip }
          aria-label="ZIP Code"
          placeholder="ZIP Code"
          onChange={ (e) => handleChange(e) }
        >
        </input>
        { !validZip && <p className="error-message">Invalid ZIP code</p> }
      </div> 
      <div className="search-bar__input-container search-bar__input-container--materials">
        <input
          className="search-bar__input"
          type="text"
          name="materials"
          value={ materials }
          aria-label="Material"
          placeholder="Search for a material (plastic bottle, glass, etc.)"
          onChange={ (e) => handleChange(e) }
        >
        </input>
      </div>
      <button className="search-bar__button">Search</button>
    </form>
  )
};

export default SearchBar;
