import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search">
        <input placeholder='Search School Districts'
               onChange={(event) =>this.props.locationSearch(event.target.value)} />
      </div>
    );
  }
}

Search.propTypes = {
  locationSearch: PropTypes.func
};


export default Search;
