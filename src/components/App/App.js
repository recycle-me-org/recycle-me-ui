import NavBar from '../NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => (
  <main className="app">
    <NavBar />
    <LandingPage />
    <Map />
    <SearchBar />
    <Footer />
  </main>
);

export default App;
