import React, { useState, useEffect } from 'react';
import Card from './Card';
import superman from '../images/superman.jpg';
import batman from '../images/batman2.jpg';
import flash from '../images/flash.jpg';
import greenArrow from '../images/green-arrow.png';
import aquaman from '../images/aquaman.jpg';
import spiderman from '../images/spiderman.jpg';
import ironMan from '../images/iron-man.jpg';
import hulk from '../images/the-hulk.png';
import thor from '../images/thor2.jpg';
import captainAmerica from '../images/captain-america2.jpg';
import Scoreboard from './Scoreboard';
import Modal from './Modal';

const Frame = () => {
  const cards = [
    { id: 1, source: superman, text: 'Superman' },
    { id: 2, source: batman, text: 'Batman' },
    { id: 3, source: flash, text: 'The Flash' },
    { id: 4, source: greenArrow, text: 'Green Arrow' },
    { id: 5, source: aquaman, text: 'Aquaman' },
    { id: 6, source: spiderman, text: 'Spiderman' },
    { id: 7, source: ironMan, text: 'Iron Man' },
    { id: 8, source: hulk, text: 'The Hulk' },
    { id: 9, source: thor, text: 'Thor' },
    {
      id: 10,
      source: captainAmerica,
      text: 'Captain America',
    },
  ];

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [compArr, setCompArr] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const pickCard = (e, cards) => {
    let selectedCardId = parseInt(e.target.id);

    for (const card of cards) {
      if (selectedCardId === card.id) {
        return card;
      }
    }
  };

  const compare = (selectedCard, compArr) => {
    for (const card of compArr) {
      if (selectedCard.id === card.id) {
        if (currentScore > bestScore) {
          setBestScore(currentScore);
        }
        setHasLost(true);
        return;
      }
    }

    setCompArr([...compArr, selectedCard]);
    setCurrentScore(currentScore + 1);

    if (hasWon || hasLost) {
      setCompArr([]);
      setCurrentScore(0);
    }
  };

  const restart = () => {
    setHasLost(false);
    setHasWon(false);
    setCurrentScore(0);
    setCompArr([]);
  };

  useEffect(() => {
    if (currentScore === 10) {
      setHasWon(true);
      setBestScore(10);
    }
  }, [currentScore]);

  return (
    <div>
      <Modal
        hasWon={hasWon}
        hasLost={hasLost}
        currentScore={currentScore}
        restart={restart}
      />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <ul className="grid">
        {shuffleArray(cards).map((card) => {
          return (
            <li key={card.id}>
              <Card
                source={card.source}
                text={card.text}
                id={card.id}
                compare={(e) => {
                  let selectedCard = pickCard(e, cards);
                  compare(selectedCard, compArr);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Frame;
