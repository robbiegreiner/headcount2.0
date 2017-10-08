import React, {Component} from 'react';
import Controls from './Controls';
import CardContainer from './CardContainer';
import DistrictRepository from './helper.js';
import Search from './Search';
import './App.css';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
const bigData = new DistrictRepository(kindergarten);

class App extends Component {
  constructor() {
    super();
    this.state = {
      bigData: {},
      cardsArray: [],
      view: 'initial',
      comparedData: {},
      averageCard: {}
    };
    this.theData = bigData.theData;
    this.updateView = this.updateView.bind(this);
    this.locationSearch = this.locationSearch.bind(this);
    this.comparisonMaker = this.comparisonMaker.bind(this);
    this.resetComparedState = this.resetComparedState.bind(this);
    this.setAverageState = this.setAverageState.bind(this);
  }

  resetComparedState() {
    this.setState({ comparedData: {} });
  }

  setAverageState(averageCard) {
    this.setState({ averageCard: averageCard });
  }

  updateView(buttonValue, dataChoice) {
    let bigData = new DistrictRepository(dataChoice);
    this.setState({ view: buttonValue, bigData: bigData.data });
  }

  locationSearch(string) {
    const newArray = bigData.findAllMatches(string);
    const newDataObject = newArray.reduce((accu, schoolObject) => {
      accu[schoolObject.location] = schoolObject;
      return accu;
    }, {});

    this.setState({ cardsArray: newArray, bigData: newDataObject });

  }

  comparisonMaker(id, event) {
    event.currentTarget.style.border = '2px solid blue';
    const swinkObj = Object.assign({
      [id]: this.state.bigData[id]
    }, this.state.comparedData);
    this.setState({ comparedData: swinkObj });
  }

  render() {
    return (
      <div className="app">
        <h1>rocky mountain head count</h1>
        <div className="search-and-controls">
          <Controls updateView={ this.updateView }/>
          <Search locationSearch={ this.locationSearch }/>
        </div>
          <CardContainer cardsArray={ this.state.cardsArray }
                         bigData={ this.state.bigData }
                         comparisonMaker={ this.comparisonMaker }
                         comparedData={ this.state.comparedData }
                         resetComparedState={ this.resetComparedState }
                         averageCard={ this.state.averageCard }
                         helper={ bigData }
                         setAverageState={ this.setAverageState }
                         />
      </div>
      //  comparedCards={this.comparedData}/>

    );
  }
}

export default App;
