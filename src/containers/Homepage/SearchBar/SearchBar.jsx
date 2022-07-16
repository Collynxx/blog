import React from "react";
import "./searchbar.css";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
    
  return (
    <div className="search-wrap">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handleSearchKey}
          placeholder="What are you searching for?"
          value={value}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>

      </form>
    </div>
  );
};

export default SearchBar;
