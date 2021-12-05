import './App.css';
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <main className='app'>
      <NavBar />
      <LandingPage />
      {/* <Map /> */}
      {/* <SearchBar /> */}
      <Footer />
    </main>
  )
}

export default App;
