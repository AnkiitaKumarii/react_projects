import React from 'react';
import Joke from './components/Joke';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Joke Generator Using React and Joke API</h1>
      <Joke/>
      {/* <Button /> */}
    </div>
  );
}

export default App;
