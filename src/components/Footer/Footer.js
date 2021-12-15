import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <section className="footer-container">
    <div className="footer-links">
      <p className="footer-mobile-app">Contact Us</p>
      <Link to="/creators">
        <p className="footer-creators">Creators</p>
      </Link>
    </div>
    <div className="footer-copyright">
      <p>©️ Recycle Me 2021</p>
    </div>
  </section>
);

export default Footer;
