import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor() {
    super();
  }

  changeStateEvent(event) {
    this.props.locationSearch(event.target.value);
  }

  render() {
    return (
      <div className="search">
        <input placeholder='Search School Districts'
               onChange={(event) =>this.changeStateEvent(event)} />
      </div>
    );
  }
}

Search.propTypes = {
  locationSearch: PropTypes.func
};


export default Search;
