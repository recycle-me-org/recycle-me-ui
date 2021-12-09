import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './SearchBar.css';
import { gql } from '@apollo/client';

const SearchBar = ({ client }) => {
  const [zip, setZip] = useState('');
  const [materials, setMaterials] = useState([]);
  const [validZip, setValidZip] = useState(true);
  const [status, setStatus] = useState(''); // leave this for now, but we may delete later
  const [materialsOptions, setMaterialsOptions] = useState([]);

  useEffect(() => {
    client.query({
      query: gql`
      query materials {
        materials {
          id
          name
          description
          imageUrl
        }
      }
      `,
    }).then(data => {
      setMaterials(data.data.materials)
    })
  })

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
      setStatus('')
      setMaterials(input.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!materials.length) {
      setStatus('materials error');
    }
    if (!zip.length) {
      setValidZip(false);
    }
  }

useEffect(() => {
  const materialData = client.cache.data.data
  const keys = Object.keys(materialData) 
  const materialsArray = keys.reduce((acc, currentKey) => {
    materialData[currentKey].value = materialData[currentKey].name
    materialData[currentKey].label = materialData[currentKey].name
    acc.push(materialData[currentKey])
    return acc
  }, [])
  setMaterialsOptions(materialsArray)
}, [materials])

  return (
    <form className="search-bar" onSubmit={ (e) => handleSubmit(e) }>
      <Select options={ materialsOptions } />
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
      {/* we may want to add some of this functionality to the select component later */}
      {/* <div className="search-bar__input-container search-bar__input-container--materials">
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
        { status === 'materials error' && <p className="error-message">Invalid materials</p> }
      </div> */}
      <button className="search-bar__button">Search</button>
    </form>
  )
};

export default SearchBar;
