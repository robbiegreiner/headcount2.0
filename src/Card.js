import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ object, key, poop, comparisonMaker }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    return <li key={key}>{key + ": " + object.data[key]}</li>;
  })

    return(
    <div className="card"
          onClick={(event) => comparisonMaker(event)}>
      <h5>{object.location}</h5>
      <p>{yearData}</p>
    </div>
  )
}

Card.propTypes = {
  object: PropTypes.object,
  id: PropTypes.string,
};

export default Card;
