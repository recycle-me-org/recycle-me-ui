import './App.css';
import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';

const App = ({ client }) => {
  return (
    <main className="app">
      <NavBar />
      <LandingPage />
      <Map />
      <SearchBar client={ client } />
      <Footer />
    </main>
  );
};

export default App;
