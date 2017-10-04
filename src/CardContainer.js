import React, { Component } from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';

const CardContainer = ({ view, bigData, comparisonMaker}) => {

  const keys = Object.keys(bigData);
  const cards = keys.map( key => {
    return <Card object={bigData[key]}
                  key={key}
                  poop={Date.now()}
                  comparisonMaker={comparisonMaker} />;
  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  view: PropTypes.string,
  bigData: PropTypes.object,
};


export default CardContainer;
