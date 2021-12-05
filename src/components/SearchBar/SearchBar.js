import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input type="text" aria-label="Zip Code" placeholder="ZIP Code"></input>
      <input type="text" aria-label="Material" placeholder="Search for a material (plastic bottle, glass, etc.)"></input>
      <button>Search</button>
    </form>
  )
};

export default SearchBar;
