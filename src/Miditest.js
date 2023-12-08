function Midi() {
    function enableMIDI(element) {
        const onMIDISuccess = (midiAccess) => {
            for (var input of midiAccess.inputs.values()) input.onmidimessage = getMIDIMessage;
        }
        const getMIDIMessage = message => {
            const [command, note, velocity] = message.data;
            switch (command) {
                case 144: // on
                    if (velocity > 0) {
                        const event = new CustomEvent('noteon', { detail: { note, velocity }});
                        element.dispatchEvent(event)
                    }
                break;
                case 128: // off
                    const event = new CustomEvent('noteoff', { detail: { note }});
                    element.dispatchEvent(event)
                break;
                default:
                break;
            }
        }
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(onMIDISuccess, () => console.log('Could not access your MIDI devices.'));
        }
    }
    
    /* audio.js */
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)
    const gainNode = audioCtx.createGain()
    const notemap = new Map();
    gainNode.connect(audioCtx.destination);
    
    function createOscillator(freq) {
      const oscNode = audioCtx.createOscillator()
      oscNode.type = 'triangle'
      oscNode.frequency.value = freq
      oscNode.connect(gainNode)
      return oscNode
    }
    
    function noteon(key) {
      if (!key.classList.contains('keydown')) {
        gainNode.gain.value = 0.33
        notemap.set(key.name, createOscillator(key.dataset.freq))
        notemap.get(key.name).start(0)
        key.classList.add('keydown')
      }
    }
    
    function noteoff(key) {
      key.classList.remove('keydown')
      const oscNode = notemap.get(key.name)
      if (oscNode) oscNode.stop(0)
      notemap.delete(key.name)
    }
    
    
        
    /* init */
    enableMIDI(midi);

    midi.addEventListener('noteon', (event) => {
    const note = midi.elements[`midi_${event.detail.note}`]
    note.style.setProperty('--v', event.detail.velocity)
    noteon(note, [{freq: note.dataset.freq}])
    })

    midi.addEventListener('noteoff', (event) => {
    const note = midi.elements[`midi_${event.detail.note}`]
    noteoff(note)
    })

    midi.addEventListener('submit', event => event.preventDefault())

    const keys = midi.querySelectorAll('button');
    keys.forEach(key => {
    key.addEventListener('pointerdown', event => {
        noteon(event.target, [{freq: event.target.dataset.freq}])
    })
    key.addEventListener('pointerup', event => { noteoff(event.target) })
    key.addEventListener('pointerleave', event => { noteoff(event.target) })
    })

  
    return (
      <div className="Midi">
      </div>
    );
  }
  
  export default Midi;