import React, { Component } from 'react';
import Controls from './Controls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: ''
    }
    this.updateView = this.updateView.bind(this)
  }

  updateView(buttonValue) {
    console.log(buttonValue);
    this.setState({view: buttonValue})
  }

  render() {
    return (
      <div>
        <Controls updateView={this.updateView}/>
      </div>
    );
  }
}

export default App;
