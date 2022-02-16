import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group bg-danger" style={{ position: "relative" }}>
        <Link
          to={`/search/${searchQuery}`}
          type="submit"
          htmlFor="search_input"
          style={{
            position: "absolute",
            right: "10px",
            top: "2px",
            background: "none",
            border: "none",
          }}
        >
          <FaSearch color="#f0ad4e" />
        </Link>
        <input
          type="text"
          name="search_query"
          id="search_query"
          value={searchQuery}
          placeholder="Search movie"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-2 py-1 bg-black text-white"
          style={{
            borderRadius: "5px",
            outline: "none",
            border: "1px solid #f0ad4e",
          }}
        />
      </div>
    </form>
  );
};

export default SearchForm;
