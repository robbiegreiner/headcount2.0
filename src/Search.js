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
    this.setState({
      inputValue: event.target.value
    }, () => {
      this.props.search(this.state.inputValue)
    })
  }

  render() {
    return(
      <div>
        <input placeholder='Search School Districts'
               onChange={this.changeStateEvent} />
      </div>
    )
  }
}

export default Search;
