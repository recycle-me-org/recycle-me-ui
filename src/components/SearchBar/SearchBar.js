import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './SearchBar.css';
import { gql, useQuery } from '@apollo/client';
import { placeIdQuery } from '../../queries/SearchLocations'

const SearchBar = ({ client }) => {
  const [location, setLocation] = useState('');
  const [materials, setMaterials] = useState([]);
  const [validZip, setValidZip] = useState(true);
  const [status, setStatus] = useState(''); // leave this for now, but we may delete later
  const [materialsOptions, setMaterialsOptions] = useState([]);
  const [materialId, setMaterialId] = useState('');
  const [locations, setLocations] = useState([]);
  const [placeId, setPlaceId] = useState('')

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
      if (zipRegex.test(location) || !location.length) {
        setValidZip(true);
      } else {
        setValidZip(false);
      }
    }, 500)

    return () => {
      clearTimeout(timerId);
    }
  }, [location])

  const handleChange = (e) => {
    const input = e.target;
    if (input.name === 'location') {
      setLocation(input.value);
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
    if (!location.length) {
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
}, [materials]);


const { data, loading, error } = useQuery(placeIdQuery, {
    variables: {
      materialId: materialId, 
      location: location
    }
  }
);



// const getLocations = () => {
//   const locationData = `80031, United States`
//   console.log('materialId: ', materialId);
//   console.log('location: ', location)
//   client.query({
//     query: gql`
//       query searchLocations($materialId: String!, $location: String!) {
//         searchLocations(materialId: parseInt($materialId), location: $location) {
//           placeId
//         }
//       }
//     `,
//   }).then(data => {
//     console.log(data);
//     console.log(materialsOptions)
//     // setLocations(data.data.materials)
//   })
// }

const handleClick = (e) => {
  e.preventDefault();
  if (validZip && materials) {
    setMaterialId("60")
    setLocation("80021")
  }
}
console.log(data)
console.log(loading)
console.log(error)

  return (
    <form className="search-bar" onSubmit={ (e) => handleSubmit(e) }>
      <Select options={ materialsOptions } />
      <div className="search-bar__input-container search-bar__input-container--zip">
        <input 
          className="search-bar__input"
          type="text"
          name="zip"
          value={ location }
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
      <button onClick={ (e) => handleClick(e) } className="search-bar__button">Search</button>
    </form>
  )
};

export default SearchBar;
