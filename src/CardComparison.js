import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js'

const CardComparison = ({ comparedData}) => {
  const keys2 = Object.keys(comparedData);
  const comparedCards = keys2.map( key => {
    return <Card object={comparedData[key]}
                  key={key}
                  id={key}
                  />;

  });

  return (
    <div className="card-comparison-container">
      Hey
    </div>
  );
};



CardComparison.propTypes = {
  comparedData:PropTypes.func
};


export default CardComparison;
