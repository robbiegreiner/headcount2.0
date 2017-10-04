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
    this.comparisonMaker = this.comparisonMaker.bind(this)
  }

  updateView(buttonValue) {
    this.setState({ view: buttonValue,
                    bigData: bigData.data })
  }

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

  comparisonMaker(event) {
    event.currentTarget.style.border = '2px solid blue'
    //onclick of a card display top left
    //click second card display top right
    //copy this.state.bigData and add left and right cards
    //give each card a unique ID (date.now())
    let swinkObj = Object.assign({Card1: this.state.bigData['SWINK 33']},
                                 {Card3: this.state.bigData['Colorado']},
                                 this.state.bigData)
    this.setState({
      bigData: swinkObj
    })
  }

  render() {
    return (
      <div className="app">
        <Search locationSearch={this.locationSearch}/>
        <Controls updateView={ this.updateView } />
        <CardContainer view={ this.state.view }
                       cardsArray = { this.state.cardsArray }
                       bigData={ this.state.bigData }
                       comparisonMaker={ this.comparisonMaker } />
      </div>

    );
  }
}

export default App;
