import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.changeStateEvent = this.changeStateEvent.bind(this)
  }

  changeStateEvent(event) {
      this.props.locationSearch(event.target.value)
    }


  render() {
    return(
      <div>
        <input placeholder='Search School Districts'
               onChange={(event) =>this.changeStateEvent(event)} />
      </div>
    )
  }
}

export default Search;
