import './App.css';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import RecycleInstructionsImage from '../RecycleInstructionsImage/RecycleInstructionsImage';

const App = () => {
  return (
    <main className="app">
      <NavBar />
      <LandingPage />
      <Map />
      <SearchBar />
      <RecycleInstructionsImage />
      <Footer />
    </main>
  );
};

export default App;
