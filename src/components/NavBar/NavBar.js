import { Link } from 'react-router-dom';
import './NavBar.css';
import recycleIcon from '../../images/recycle.png';

const NavBar = () => {
  return (
    <header className="nav-container">
      <div className="nav-icon-and-h1">
        <img src={recycleIcon} className="recycle-icon" alt="recycle" />
        <Link to="/" className="nav-h1">
          <h1>Recycle Me</h1>
        </Link>
      </div>
      <div className="nav-links">
        <p className="nav-search">Search for Item</p>
        <p className="nav-test">Test Your Knowledge</p>
        <p className="nav-creators">Creators</p>
      </div>
    </header>
  );
};

export default NavBar;
