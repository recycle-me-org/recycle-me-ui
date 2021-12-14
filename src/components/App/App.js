import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Map from '../Map/Map';
import RecyclingTips from '../RecyclingTips/RecyclingTips';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const [placeIds, setPlaceIds] = useState([]);

  const updatePlaceIds = (newPlaceIds) => {
    setPlaceIds(newPlaceIds);
    console.log('updatePlaceIds');
  };

  return (
    <main className="app">
      <NavBar />
      <LandingPage />
      <Map placeIds={placeIds} />
      <SearchBar updatePlaceIds={updatePlaceIds} />
      <RecyclingTips />
      <Footer />
    </main>
  );
};

export default App;
