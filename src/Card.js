import React from 'react';

const Card = ({ object, key }) => {
  const keys = Object.keys(object.data);
  const yearData = keys.map( key => {
    return <li>{key + ": " + object.data[key]}</li>;
  })

  return(
    <div className="card">
      <h5>{object.location}</h5>
      <p>{yearData}</p>
      <h5></h5>

    </div>
)}


export default Card;
