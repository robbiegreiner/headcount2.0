import React, { Component } from 'react';
import Card from './Card.js'

const CardContainer = ({ view, bigData }) => {

  const keys = Object.keys(bigData);
  const cards = keys.map( key => {
    // console.log(bigData[key]);
    return <Card object={bigData[key]} key={key} />;
  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )


}


export default CardContainer;
