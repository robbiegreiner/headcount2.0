import React, { Component } from 'react';
import Card from './Card.js'

const CardContainer = ({ view, bigData, cardsArray }) => {

  const keys = Object.keys(bigData);
  const cards = keys.map( key => {
    return <Card object={bigData[key]} key={key} cardsArray={cardsArray}/>;
  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )


}


export default CardContainer;
