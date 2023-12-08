import React, { useState, useRef, useEffect } from 'react';

export default function Piano({ onStateChange }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);

  const noteFrequencies = {
    'C': 261.63,
    'C#': 277.18, 'Db': 277.18,
    'D': 293.66,
    'D#': 311.13, 'Eb': 311.13,
    'E': 329.63,
    'F': 349.23,
    'F#': 369.99, 'Gb': 369.99,
    'G': 392.00,
    'G#': 415.30, 'Ab': 415.30,
    'A': 440.00,
    'A#': 466.16, 'Bb': 466.16,
    'B': 493.88
  };

  const notesByKeys = {
    'z': 'C',
    's': 'C#',
    'x': 'D',
    'd': 'D#',
    'c': 'E',
    'v': 'F',
    'g': 'F#',
    'b': 'G',
    'h': 'G#',
    'n': 'A',
    'j': 'A#',
    'm': 'B'
  };

  const playNoteWithMp3 = (key) => {

  }

  function playNoteWithWebAudio(noteName) {
    if (!noteFrequencies.hasOwnProperty(noteName)) {
      console.error('Invalid note name');
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    oscillatorRef.current = audioContextRef.current.createOscillator();
    oscillatorRef.current.frequency.setValueAtTime(noteFrequencies[noteName], audioContextRef.current.currentTime);
    oscillatorRef.current.connect(audioContextRef.current.destination);
    oscillatorRef.current.start();
    oscillatorRef.current.stop(audioContextRef.current.currentTime + 0.5); // Adjust the duration as needed
  }

  const handleKeyDown = (event) => {
    if (notesByKeys.hasOwnProperty(event.key)) {
      onStateChange(notesByKeys[event.key]);
      setPressedKey(event.key);
      playNoteWithWebAudio(notesByKeys[event.key]);
    }
  };

  const handleKeyUp = () => {
    setPressedKey(null);
  };

  useEffect(() => {
    // Add event listeners when the component mounts
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  

  const play = (key) => {
    console.log('played ', key);
    onStateChange(key);
    playNoteWithWebAudio(key);
  };

  const stop = (key) => {
    console.log('stopping ', key);
    onStateChange('');
  };

  return <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* <audio id="scale" ref={audioRef} >
      <source src={process.env.PUBLIC_URL + '/scale.mp3'} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio> */}

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="161" >
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="0" y="0" width="23" height="120" onMouseDown={() => play('C')} onMouseUp={() => stop('C')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="23" y="0" width="23" height="120" onMouseDown={() => play('D')} onMouseUp={() => stop('D')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="46" y="0" width="23" height="120" onMouseDown={() => play('E')} onMouseUp={() => stop('E')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="69" y="0" width="23" height="120" onMouseDown={() => play('F')} onMouseUp={() => stop('F')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="92" y="0" width="23" height="120" onMouseDown={() => play('G')} onMouseUp={() => stop('G')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="115" y="0" width="23" height="120" onMouseDown={() => play('A')} onMouseUp={() => stop('A')} />
      <rect className="Piano-whitekey" style={{ fill: 'white', stroke: 'black' }} x="138" y="0" width="23" height="120" onMouseDown={() => play('B')} onMouseUp={() => stop('B')} />
      <rect className="Piano-blackkey" style={{ fill: 'black', stroke: 'black' }} x="14.33333" y="0" width="13" height="80" onMouseDown={() => play('C#')} onMouseUp={() => stop('C#')} />
      <rect className="Piano-blackkey" style={{ fill: 'black', stroke: 'black' }} x="41.66666" y="0" width="13" height="80" onMouseDown={() => play('D#')} onMouseUp={() => stop('D#')} />
      <rect className="Piano-blackkey" style={{ fill: 'black', stroke: 'black' }} x="82.25" y="0" width="13" height="80" onMouseDown={() => play('F#')} onMouseUp={() => stop('F#')} />
      <rect className="Piano-blackkey" style={{ fill: 'black', stroke: 'black' }} x="108.25" y="0" width="13" height="80" onMouseDown={() => play('G#')} onMouseUp={() => stop('G#')} />
      <rect className="Piano-blackkey" style={{ fill: 'black', stroke: 'black' }} x="134.75" y="0" width="13" height="80" onMouseDown={() => play('A#')} onMouseUp={() => stop('A#')} />
    </svg>
  </div>
}