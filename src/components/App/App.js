import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Map from '../Map/Map';
import RecyclingTips from '../RecyclingTips/RecyclingTips';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import './App.css';
import Creators from '../Creators/Creators';
import NoMatch from '../NoMatch/NoMatch';

// const Creators = React.lazy(() => import("./pages/Creators"));

const App = () => {
  const [locationDetails, setlocationDetails] = useState([]);

  const updateLocationDetails = (newlocationDetails) => {
    setlocationDetails(newlocationDetails);
    console.log(locationDetails);
  };

  return (
    <main className="app">
      <NavBar />
      <LandingPage />
      <Map locationDetails={locationDetails} />
      <SearchBar updateLocationDetails={updateLocationDetails} />
      <RecyclingTips />
      <Footer />
    </main>
  );
};

export default App;
