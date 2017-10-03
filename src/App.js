import React, { Component } from 'react';
import Controls from './Controls';
import CardContainer from './CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: 'initial'
    }
    this.updateView = this.updateView.bind(this)
  }

  updateView(buttonValue) {
    this.setState({view: buttonValue})
  }

  render() {
    return (
      <div>
        <Controls updateView={ this.updateView } />
        <CardContainer view={ this.state.view } />
      </div>

    );
  }
}

export default App;
