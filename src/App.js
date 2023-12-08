import './App.css';
import Piano from './piano';
import ColorWheel from './colorwheel';
import React, { useState, useEffect } from 'react';
import LogRocket from 'logrocket';

function App() {

  const [sharedState, setSharedState] = useState('');

  useEffect(() => {
    LogRocket.init('y86k6r/spin');
  }, [])

  const handleStateChange = (newState) => {
    setSharedState(newState);
  };

  
  navigator.requestMIDIAccess({ sysex: true })
    .then(onMIDISuccess, onMIDIFailure);

  function onMIDISuccess(midiAccess) {
    console.log('MIDI accessible');
  }

  function onMIDIFailure(error) {
    console.error('Could not access MIDI devices:', error);
  }

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
