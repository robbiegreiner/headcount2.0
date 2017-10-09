import React from 'react';
import PropTypes from 'prop-types';

const Search = ( { locationSearch } ) => {
  return (
    <div className="search">
      <input placeholder='Search School Districts'
             onChange={(event) => locationSearch(event.target.value)} />
    </div>
  );
};


Search.propTypes = {
  locationSearch: PropTypes.func
};


export default Search;
