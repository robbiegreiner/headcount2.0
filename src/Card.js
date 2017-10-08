import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ object, id, comparisonMaker, comparedData, resetComparedState }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    if (object.data[key] > 0.49){
      return <li className="top-half" key={key}>{key + ": " + object.data[key]}</li>;
    } else {
      return <li className="bottom-half" key={key}>{key + ": " + object.data[key]}</li>;
    }
  });

  if (Object.keys(comparedData).length < 2){
    return (
      <div className="card"
            onClick={(event) => comparisonMaker(id, event)}>
        {object && <h5>{object.location}</h5>}
        <p>{yearData}</p>
      </div>
    );
  }

  if (Object.keys(comparedData).length >= 2){
    return (
      <div className="card"
            onClick={() => resetComparedState()}>
        {object && <h5>{object.location}</h5>}
        <p>{yearData}</p>
      </div>
    );
  }
};

Card.propTypes = {
  object: PropTypes.object,
  id: PropTypes.string,
  comparisonMaker: PropTypes.func,
  comparedData: PropTypes.object,
  resetComparedState: PropTypes.func
};

export default Card;
