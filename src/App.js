import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Scoreboard from './Components/Scoreboard';
import Frame from './Components/Frame';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Frame />
      </main>
      <footer>
        Created by{' '}
        <a href="https://www.github.com/mwiafeansong">mwiafeansong</a>
      </footer>
    </div>
  );
};

export default App;
