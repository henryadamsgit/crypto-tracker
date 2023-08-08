import React, { useState } from "react";
import "./Search.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the searchQuery, like perform a search
    console.log("Search query:", searchQuery);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search for companies"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button className="search-bar__button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
