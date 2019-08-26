import React, { useContext, useRef } from 'react';
import AppContext from '../../context/appContext';

const Search = () => {
  const appContext = useContext(AppContext);
  const { places, filterPlaces } = appContext;

  const text = useRef(null);

  const onChange = event => {
    event.preventDefault();
    filterPlaces(text.current.value);
  };

  return (
    <div className="search">
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Filter places"
          className="search-input"
          ref={text}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default Search;
