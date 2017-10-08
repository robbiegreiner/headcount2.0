import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ object, key, id, comparisonMaker }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    if (object.data[key] > 0.49){
      return <li className="top-half" key={key}>{key + ": " + object.data[key]}</li>;
    } else {
      return <li className="bottom-half" key={key}>{key + ": " + object.data[key]}</li>;
    }
  });

  return (
    <div className="card"
          onClick={(event) => comparisonMaker(id, event)}>
      {object && <h5>{object.location}</h5>}
      <p>{yearData}</p>
    </div>
  );
};

Card.propTypes = {
  object: PropTypes.object.isRequired,
  key: PropTypes.string,
  poop: PropTypes.string,
  comparisonMaker: PropTypes.func
};

export default Card;
