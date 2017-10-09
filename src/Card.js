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

  return (
      <div className="card"
            onClick={(event) => { Object.keys(comparedData).length < 2 ? comparisonMaker(id, event) : resetComparedState();   } }>
        {object && <h5>{object.location}</h5>}
        <p>{yearData}</p>
      </div>
    );
};

Card.propTypes = {
  object: PropTypes.object,
  id: PropTypes.string,
  comparisonMaker: PropTypes.func,
  comparedData: PropTypes.object,
  resetComparedState: PropTypes.func
};

export default Card;
