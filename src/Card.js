import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ object, key, id, comparisonMaker }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    return <li key={key}>{key + ": " + object.data[key]}</li>;
  });

  // create a comparison component and container
  // set state their with the first card
  // set state theit with the second card
  // use shouldcomponent update... one state has 2 cards.. run compairson..
  // compare two cards, create object for the comparison card
  // set state to the three cards and render three cards  

  // on click set as card 1 set state
  // on click set as card 2 set state
  // call functions on each button
  // send card 1 & card 2 up to state??
  // if 3rd card is clicked if state.length =2 reset state{:}
  // if state.lenght = 2, pass it (key1, key2) up to comparisonMaker

  return (
    <div className="card"
          onClick={(event) => comparisonMaker(id, event)}>
      <h5>{object.location}</h5>
      <p>{yearData}</p>
    </div>
  );
};

Card.propTypes = {
  object: PropTypes.object,
  key: PropTypes.string,
  poop: PropTypes.string,
  comparisonMaker: PropTypes.func
};

export default Card;
