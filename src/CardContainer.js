import React, { Component } from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';
import DistrictRepository from './helper.js';

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

  const cardQty = (Object.keys(comparedData).length);
  const avgKeys = (Object.keys(comparedData))
  let cardJSX = '';
  console.log('cardqty' + cardQty);

  if (cardQty === 2 ) {
    console.log(comparedData);
    console.log(avgKeys[0] +" " + avgKeys[1]);
    const newAverageCard = helper.compareDistrictAverages(avgKeys[0], avgKeys[1]);
    console.log(newAverageCard);
    const avgCardKeys = Object.keys(newAverageCard);
    console.log(avgCardKeys);
    cardJSX = <div className="compared-card">
                <h4>{avgCardKeys[0] + ": " + newAverageCard[avgCardKeys[0]] }</h4>
                <h3> ---{newAverageCard[avgCardKeys[2]]}--- </h3>
                <h4>{avgCardKeys[1] + ": " + newAverageCard[avgCardKeys[1]] }</h4>
                <button onClick={ () => resetComparedState()}>RESET</button>
              </div>
  }

  return (
    <div>
      <div className="compared-card-container">
        { comparedCards }
        { cardJSX }
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
