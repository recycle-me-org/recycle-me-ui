import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input 
        className="search-bar__input search-bar__input--zip"
        type="text"
        aria-label="Zip Code"
        placeholder="ZIP Code"
      >
      </input>
      <input
        className="search-bar__input search-bar__input--materials"
        type="text"
        aria-label="Material"
        placeholder="Search for a material (plastic bottle, glass, etc.)"
      >
      </input>
      <button className="search-bar__button">Search</button>
    </form>
  )
};

export default SearchBar;
