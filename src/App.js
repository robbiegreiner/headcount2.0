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
      cardsArray: [],
      view: 'initial'
    }
    this.updateView = this.updateView.bind(this)
  }

  updateView(buttonValue) {
    const bigData = new DistrictRepository(kindergarten);
    this.setState({ view: buttonValue,
                    bigData: bigData.data })
  }

  render() {
    return (
      <div className="app">
        <Controls updateView={ this.updateView } />
        <CardContainer view={ this.state.view } bigData={ this.state.bigData } />
      </div>

    );
  }
}

export default App;
