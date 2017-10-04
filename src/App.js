import React, { Component } from 'react';
import Controls from './Controls';
import CardContainer from './CardContainer';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import Search from './Search';
import './App.css';
const bigData = new DistrictRepository(kindergarten);

class App extends Component {
  constructor() {
    super()
    this.state = {
      bigData: {},
      cardsArray: [],
      view: 'initial'
    }
    this.data = bigData.data;
    this.updateView = this.updateView.bind(this)
    this.locationSearch = this.locationSearch.bind(this)
  }

  updateView(buttonValue) {
    // const bigData = new DistrictRepository(kindergarten);
    this.setState({ view: buttonValue,
                    bigData: bigData.data })
  }

  // componentDidMount() {
  //   this.setState({ cardsArray: bigData.findAllMatches() })
  // }

  locationSearch(string) {
    const newArray = bigData.findAllMatches(string);
    const newDataObject = newArray.reduce( (accu, schoolObject) => {
      accu[schoolObject.location] = schoolObject;
      return accu;
    },{})

    this.setState({
      cardsArray: newArray,
      bigData: newDataObject,
    })

  }

  render() {
    return (
      <div className="app">
        <Search locationSearch={this.locationSearch}/>
        <Controls updateView={ this.updateView } />
        <CardContainer view={ this.state.view }
                       cardsArray = { this.state.cardsArray }
                       bigData={ this.state.bigData } />
      </div>

    );
  }
}

export default App;
