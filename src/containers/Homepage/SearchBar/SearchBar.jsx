import React, { useState } from "react";
import "./searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Sidebar from "../../../components/Sidebar";

function SearchBar(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.value;
    setSearchText(text);
  };

  return (
    <div className="search-wrap">
      <Sidebar />
      <form onSubmit={handleSubmit}>
      <input className="inputP"
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        value={searchText}
        placeholder="What are you searching for?"
      />
      </form>
      <div className="searchIcon">
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchBar;
