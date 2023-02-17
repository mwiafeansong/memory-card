import React from 'react';

const Scoreboard = (props) => {
  return (
    <div className="scores">
      <p className="currentScore">Score: {props.currentScore}</p>
      <p className="bestScore">Best Score: {props.bestScore}</p>
    </div>
  );
};

export default Scoreboard;
