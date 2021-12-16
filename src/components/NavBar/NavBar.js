import { Link } from 'react-router-dom';
import recycleIcon from '../../assets/recycle.png';
import './NavBar.css';

const NavBar = () => (
  <header className="nav-container">
    <div className="nav-icon-and-h1">
      <img src={recycleIcon} className="recycle-icon" alt="recycle" />
      <Link to="/">
        <h1 className="nav-h1 cy-title">Recycle Me</h1>
      </Link>
    </div>
    <div className="nav-links">
      <Link to="/creators">
        <p className="nav-link-3">Creators</p>
      </Link>
    </div>
  </header>
  );

export default NavBar;
