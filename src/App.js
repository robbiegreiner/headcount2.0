import React, {Component} from 'react';
import '../CSS/App.css';
import Controls from './Controls';
import CardContainer from './CardContainer';
import DistrictRepository from './helper.js';
import Search from './Search';
import kindergarten from '../data/kindergartners_in_full_day_program.js';
const bigData = new DistrictRepository(kindergarten);

class App extends Component {
  constructor() {
    super();
    this.state = {
      bigData: {},
      comparedData: {}
    };
    this.theData = bigData.theData;
    this.updateView = this.updateView.bind(this);
    this.locationSearch = this.locationSearch.bind(this);
    this.comparisonMaker = this.comparisonMaker.bind(this);
    this.resetComparedState = this.resetComparedState.bind(this);
  }

  resetComparedState() {
    this.setState({ comparedData: {} });
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

    this.setState({bigData: newDataObject});

  }

  comparisonMaker(id, event) {
    // event.currentTarget.classList.add('card-border');
    const swinkObj = Object.assign({
      [id]: this.state.bigData[id]
    }, this.state.comparedData);
    this.setState({ comparedData: swinkObj });
  }

  render() {
    return (
      <div className="app">
        <h1>Rocky Mountain Head Count</h1>
        <div className="search-and-controls">
          <Controls updateView={ this.updateView }/>
          <Search locationSearch={ this.locationSearch }/>
        </div>
          <CardContainer
                       bigData={this.state.bigData}
                       comparisonMaker={this.comparisonMaker}
                       comparedData={this.state.comparedData}
                       resetComparedState={this.resetComparedState}
                       helper={bigData}/>
      </div>
    );
  }
}

export default App;
