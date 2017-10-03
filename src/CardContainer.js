import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import kindergarten from '../data/kindergartners_in_full_day_program.js';


class CardContainer extends Component {
  constructor(){
    super();
    this.data = {};
  }

  getData() {
    if(this.props.view === 'kindergarten'){
      const ourData = new DistrictRepository(kindergarten);
      this.data = ourData;
      console.log(this.data);
    }
  }







  render() {
    console.log(this.props.view);
    return (
      <div>
        {this.getData()}
        CardContainer
      </div>
    );
  }
}


export default CardContainer;
