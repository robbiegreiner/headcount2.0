import React, { Component } from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';

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

  let newAverageCard = {};
  const cardQty = (Object.keys(comparedData).length);
  console.log(cardQty);
  //Getting hung up at this point
  if (cardQty === 2) {
    const keys = Object.keys(comparedData);
    console.log(keys);
  // // JUST PASS IN THE LOCATION STRING!!! comparedData[keys[0].location]
    newAverageCard = helper.compareDistrictAverages(keys[0],keys[1]);
  }
  console.log(newAverageCard);


  return (
    <div>
      <div className="compared-card-container">
        { comparedCards }
        <div className="card">
          {/* Pass in newAverageCard? */}
        </div>
      </div>
      <div className="card-container">
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
