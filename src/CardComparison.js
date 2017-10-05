import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js'

class CardComparison extends Component {
  constructor({ comparedData }) {
    super();
    this.state = {
      cardsArray: []
    };
  }

  createCards(comparedData){
    if(!comparedData){
      return;
    }
    const keys2 = Object.keys(comparedData);
    console.log(keys2);
    const comparedCards = keys2.map( key => {
      return <Card object={comparedData[key]}/>;
    });
    return comparedCards;
  }


  render() {
    return (
      <div className="card-comparison-container">
        { this.createCards }
      </div>
    );
  }
}

CardComparison.propTypes = {

};


export default CardComparison;
