import React from 'react';

const Card = ({ object, key, cardsArray }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    return <li>{key + ": " + object.data[key]}</li>;
  })





  const searchedData = cardsArray.map( card => {
    const keys = Object.keys(card.data);
    return <li>{card.location + ": " + keys.map( key => {
                                                  return key + ": " + card.data[key]
                                                  })}</li>;
  })

  if(cardsArray.length){
    return(
      <div className="card">
        <h5>{searchedData}</h5>
      </div>
    )
  } else {
    return(
    <div className="card">
      <h5>{object.location}</h5>
      <p>{yearData}</p>
    </div>
  )}
}


export default Card;
