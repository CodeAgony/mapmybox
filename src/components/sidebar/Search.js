import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Filter places"
          className="search-input"
        />
      </form>
    </div>
  );
};

export default Search;
