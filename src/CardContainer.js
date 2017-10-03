import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';


class CardContainer extends Component {
  constructor(){
    super();
    this.allData = {};
    this.state = {
      cardData: [],
    }
  }

  getData() {
    if(this.props.view === 'kindergarten'){
      const ourData = new DistrictRepository(kindergarten);
      this.allData = ourData;
      console.log(this.allData);
      this.playWithData();
    }
  }

  playWithData() {
    const myKeys = Object.keys(this.allData.data);
    myKeys.map( key => {
      return this.allData.data[key].location
    })
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}


export default CardContainer;
