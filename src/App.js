import React, {Component} from 'react';
import Controls from './Controls';
import CardContainer from './CardContainer';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';
import Search from './Search';
import './App.css';
const bigData = new DistrictRepository(kindergarten);

class App extends Component {
  constructor() {
    super();
    this.state = {
      bigData: {},
      cardsArray: [],
      view: 'initial',
      comparedData: {}
    };
    this.theData = bigData.theData;
    this.updateView = this.updateView.bind(this);
    this.locationSearch = this.locationSearch.bind(this);
    this.comparisonMaker = this.comparisonMaker.bind(this);
  }

  updateView(buttonValue) {
    this.setState({view: buttonValue, bigData: bigData.data});
  }

  locationSearch(string) {
    const newArray = bigData.findAllMatches(string);
    const newDataObject = newArray.reduce((accu, schoolObject) => {
      accu[schoolObject.location] = schoolObject;
      return accu;
    }, {});

    this.setState({cardsArray: newArray, bigData: newDataObject});

  }

  comparisonMaker(id, event) {
    event.currentTarget.style.border = '2px solid blue';
    //onclick of a card display top left
    //click second card display top right
    //copy this.state.bigData and add left and right cards
    //give each card a unique ID (date.now())
    const swinkObj = Object.assign({
      [id]: this.state.bigData[id]
    }, this.state.comparedData);
    this.setState({ comparedData: swinkObj });
    console.log(Object.keys(this.state.comparedData).length + 1);

  }

  render() {
    return (
      <div className="app">
        <Search locationSearch={this.locationSearch}/>
        <Controls updateView={this.updateView}/>
        <CardContainer cardsArray={this.state.cardsArray}
                       bigData={this.state.bigData}
                       comparisonMaker={this.comparisonMaker}/>
      </div>
      //  comparedCards={this.comparedData}/>

    );
  }
}

export default App;
