import { WebMidi, Note } from 'webmidi';
import React, { useState } from 'react';

export default function Piano({ onStateChange }) {

    WebMidi
    .enable()
    .then(onMidiEnabled)
    .catch(err => alert(err));

  function onMidiEnabled() {
    // WebMidi.inputs.forEach(input => console.log('input ', input.name));
    // WebMidi.outputs.forEach(output => console.log('output ', output.name));

    let output = WebMidi.outputs[0];
    const note = new Note("A4");
    output.playNote(note);

    // console.log('channels ', output.channels.length);
    // for (let index = 0; index < 10; index++) {
    //     output.channels[index].playNote('C3');
    // }
  }
  
    const play = (key) => {
        console.log('played ', key);
        onStateChange(key);
        // let output = WebMidi.outputs[0];
        // let channel = output.channels[1];
        // console.log(output);
        // console.log(channel);
        // channel.playNote(key);
    };

    const stop = (key) => {
      console.log('stopping ', key);
      onStateChange('');
      // let output = WebMidi.outputs[0];
      // let channel = output.channels[1];
      // console.log(output);
      // console.log(channel);
      // channel.playNote(key);
  };

    return <div className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg  version="1.0" xmlns="http://www.w3.org/2000/svg" width="161" >
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x=  "0" y="0" width="23" height="120" onMouseDown={() => play('C')} onMouseUp={() => stop('C')}/>
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x= "23" y="0" width="23" height="120" onMouseDown={() => play('D')} onMouseUp={() => stop('D')} />
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x= "46" y="0" width="23" height="120" onMouseDown={() => play('E')} onMouseUp={() => stop('E')}/>
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x= "69" y="0" width="23" height="120" onMouseDown={() => play('F')} onMouseUp={() => stop('F')}/>
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x= "92" y="0" width="23" height="120" onMouseDown={() => play('G')} onMouseUp={() => stop('G')}/>
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x="115" y="0" width="23" height="120" onMouseDown={() => play('A')} onMouseUp={() => stop('A')}/>
        <rect className="Piano-whitekey" style={{fill: 'white', stroke:'black'}} x="138" y="0" width="23" height="120" onMouseDown={() => play('B')} onMouseUp={() => stop('B')}/>
        <rect className="Piano-blackkey" style={{fill: 'black', stroke:'black'}} x="14.33333" y="0" width="13" height="80" onMouseDown={() => play('C#')} onMouseUp={() => stop('C#')}/>
        <rect className="Piano-blackkey" style={{fill: 'black', stroke:'black'}} x="41.66666" y="0" width="13" height="80" onMouseDown={() => play('D#')} onMouseUp={() => stop('D#')}/>
        <rect className="Piano-blackkey" style={{fill: 'black', stroke:'black'}} x="82.25" y="0" width="13" height="80"  onMouseDown={() => play('F#')} onMouseUp={() => stop('F#')}/>
        <rect className="Piano-blackkey" style={{fill: 'black', stroke:'black'}} x="108.25" y="0" width="13" height="80" onMouseDown={() => play('G#')} onMouseUp={() => stop('G#')}/>
        <rect className="Piano-blackkey" style={{fill: 'black', stroke:'black'}} x="134.75" y="0" width="13" height="80" onMouseDown={() => play('A#')} onMouseUp={() => stop('A#')}/>
    </svg>
    </div>
}