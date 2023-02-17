import React from 'react';

const Modal = (props) => {
  if (props.hasWon || props.hasLost) {
    return (
      <div className="modal">
        <div className="backdrop"></div>
        <div className="gameState">
          {props.hasWon && <p class="won">Congratulations! You Won.</p>}
          {props.hasLost && (
            <div>
              <p>Game Over</p>
              <p>Your Score: {props.currentScore}</p>
            </div>
          )}
          <button onClick={props.restart}>Restart</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
