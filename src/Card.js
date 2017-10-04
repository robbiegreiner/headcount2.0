import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ object, key, id }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    return <li key={key}>{key + ": " + object.data[key]}</li>;
  })

    return(
    <div className="card">
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
