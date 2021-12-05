import './App.css';
// import ExchangeRates from '../ExchangeRates/ExchangeRates'
import NavBar from '../NavBar/NavBar'
import LandingPage from '../LandingPage/LandingPage'
import Footer from '../Footer/Footer'

const App = () => {
  return (
    <main className='app'>
      <NavBar />
      <LandingPage />
      <Footer />
    </main>
  )
}

export default App;
