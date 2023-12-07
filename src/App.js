import './App.css';
import Piano from './piano';
import ColorWheel from './colorwheel';
import React, { useState } from 'react';

function App() {

  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newState) => {
    setSharedState(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
      <ColorWheel sharedState={sharedState} />
      <Piano onStateChange={handleStateChange} />
      </header>
    </div>
  );
}

export default App;
