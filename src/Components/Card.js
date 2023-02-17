import React from 'react';

const Card = (props) => {
  return (
    <div className="card" id={props.id} onClick={props.compare}>
      <img id={props.id} src={props.source} alt=""></img>
      <p id={props.id}>{props.text}</p>
    </div>
  );
};

export default Card;
