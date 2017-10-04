import React, { Component } from 'react';
import Controls from './Controls';
import CardContainer from './CardContainer';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bigData: {},
      cards: [],
      view: 'initial'
    }
    this.updateView = this.updateView.bind(this)
  }

  updateView(buttonValue) {
    this.setState({ view: buttonValue})
    this.setState({ bigData: new DistrictRepository(kindergarten) })
  }

  render() {
    return (
      <div>
        <Controls updateView={ this.updateView } />
        <CardContainer view={ this.state.view } bigData={ this.state.bigData } />
      </div>

    );
  }
}

export default App;
