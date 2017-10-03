import React, { Component } from 'react';

class Controls extends Component {
  constructor(){
    super();
  }

  updateAppView(event) {
    this.props.updateView(event.target.id)
  }

  render() {
    return (
      <div>
        <button id='kindergarten'
                onClick={(event) => this.updateAppView(event)} >
          Kindergarten
        </button>
        <button>
          Second
        </button>
        <button>
          Third
        </button>
      </div>
    );
  }
}

export default Controls;
