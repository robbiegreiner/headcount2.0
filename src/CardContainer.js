import React, { Component } from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';

// change this to stateful Component
// this.state.comparisonCards = {};
// click on card 1.. create a new object for card 1 and set state
// click on card 2.. create a new new object and set state to this.state.comaprisonCards
// componentShouldUpdate() once this.state.comparisoncards.length === 2
// Compare the two the cards, get the averages that we need..
// create the third card... make an object
// do an newObject = object.assign(card1, card3, card 2)
// setState(comparisonCards = newObject)

const CardContainer = ({ bigData, comparisonMaker, comparedData, resetComparedState, averageCard, helper, setAverageState}) => {

  const keys = Object.keys(bigData);
  const cards = keys.map( key => {
    return <Card object={bigData[key]}
                  key={key}
                  id={key}
                  comparisonMaker={comparisonMaker} />;
  });

  const keys2 = Object.keys(comparedData);
  const comparedCards = keys2.map( key => {
    return <Card object={comparedData[key]}
                  key={key}
                  id={key}
                  comparisonMaker={comparisonMaker}
                  resetComparedState={resetComparedState}/>;
  });

  // create average card and set to state.. maybe just do it myself and not run
  // it thru function
  const cardQty = (Object.keys(comparedData).length);
  console.log(cardQty);
  if (cardQty === 2) {
    const keys = Object.keys(comparedData);
    console.log(keys);
    const averageCard = helper.compareDistrictAverages(comparedData[keys[0]], comparedData[keys[1]]);
    // setAverageState(averageCard);
  }


  return (
    <div>
      <div className="compared-card-container">
        { comparedCards }

      </div>
      <div className="card-container-selected">
        { cards }
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  comparisonMaker: PropTypes.func,
  bigData: PropTypes.object,
  comparedData: PropTypes.object,
  resetComparedState: PropTypes.func,
  averageCard: PropTypes.object,
  helper: PropTypes.object
};


export default CardContainer;
