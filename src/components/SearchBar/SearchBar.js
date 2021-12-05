import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <h2>Search</h2>
            <label className="search-bar-input">ZIP
                <input type="text"></input>
            </label>
            <label className="search-bar-input">Keywords
                <input type="text"></input>
            </label>
        </div>
    )
};

export default SearchBar;
