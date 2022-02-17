import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <form
      action={`/search/${searchQuery}`}
      onSubmit={(e) => {
        if (!searchQuery) {
          alert(
            'You must enter a search term to actually "search" for a movie'
          );
        }
      }}
      className={`form search-form mt-3 mt-sm-0`}
    >
      <div className="input-grop">
        <button
          type="submit"
          htmlFor="search_input"
          className="search-icon-wrapper p-1"
          style={{ background: "none", border: "none" }}
        >
          <FaSearch color="#f0ad4e" />
        </button>
        <input
          type="text"
          id="search_query"
          value={searchQuery}
          name={searchQuery}
          placeholder="Search movie"
          onChange={(e) => {
            if (e.target.value.trim().length < 1) {
              setSearchQuery("");
            } else {
              setSearchQuery(e.target.value);
            }
          }}
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
