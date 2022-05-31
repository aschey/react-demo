import React from 'react';
import './App.css';
import { Game } from './Game';

// This is typically where you wire up your main components with navigation, configuration, etc.
const App: React.FC<{}> = () => {
  return (
    <Game />
  );
}

export default App;
