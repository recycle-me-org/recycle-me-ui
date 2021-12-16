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
  const [placeIds, setPlaceIds] = useState([]);

  const updatePlaceIds = (newPlaceIds) => {
    setPlaceIds(newPlaceIds);
    console.log('updatePlaceIds');
  };

  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route 
          path="/recycle-me-ui/"
          element={<>
            <LandingPage />
            <Map placeIds={ placeIds } />
            <SearchBar updatePlaceIds={ updatePlaceIds } />
          </>} 
        />
        <Route 
          path="creators" 
          element={<Creators />} 
        /> 
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
