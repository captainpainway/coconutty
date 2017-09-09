/*
 * music.js
 * Music and sound effects for the game.
 * Background music inspired by 'Don Pedro' by A. G. Villoldo.
 * Made with TinyMusic.js
*/

const bgMusic = () => {
  const ac = new AudioContext();
  const tempo = 80;

  const melody = [
    'G4 s',
    'A4 s',
    'B4 s',

    'C5 s',
    'D5 s',
    'B4 s',
    'C5 s',
    'A4 s',
    'B4 s',
    'G4 s',
    'A4 s',

    'F4 s',
    'D4 e',
    'E4 s',
    'F4 s',
    'F4 s',
    'G4 s',
    'A4 s',

    'B4 s',
    'C5 s',
    'A4 s',
    'B4 s',
    'G4 s',
    'A4 s',
    'F4 s',
    'G4 s',

    'E4 s',
    'C4 e',
    'D4 s',
    'E4 q',

    'A4 s',
    'B4 s',
    'C#5 s',
    'D5 s',
    'E5 s',
    'F5 s',
    'G5 s',
    'G#5 s',

    'A5 s',
    'F5 s',
    '- s',
    'D5 s',
    'A4 e',
    'A#4 e',

    'B4 e',
    'G5 e',
    '- e',
    'F5 e',

    'F5 s',
    'E5 e',
    'D#5 s',
    'E5 s'
  ];
  const harmony = [
    '- s',
    '- s',
    '- s',

    'C3 es',
    'E3 s',
    'G3 e',
    'C3 e',

    'D3 es',
    'D3 s',
    'B3 e',
    'D3 e',

    'G2 es',
    'D3 s',
    'B3 e',
    'B2 e',

    'C3 es',
    'E3 s',
    'G3 q',

    'C#3 es',
    'E3 s',
    'G3 e',
    'C#3 e',

    'D3 es',
    'F3 s',
    'A3 e',
    '- e',

    'G2 es',
    'D3 s',
    'F3 e',
    'G2 e',

    'C3 es',
    'E3 s',
    'G3 s'
  ];
  const sequence = new TinyMusic.Sequence(ac, tempo, melody);
  const sequence2 = new TinyMusic.Sequence(ac, tempo, harmony);

  sequence.staccato = 0.4;
  sequence2.staccato = 0.4;
  sequence.gain.gain.value = 0.3;
  sequence2.gain.gain.value = 0.3;

  sequence.mid.frequency.value = 800;
  sequence.mid.gain.value = 3;
  sequence2.bass.gain.value = 6;
  sequence2.bass.frequency.value = 80;
  sequence2.mid.gain.value = -6;
  sequence2.mid.frequency.value = 500;
  sequence2.treble.gain.value = -2;
  sequence2.treble.frequency.value = 1400;

  sequence.loop = true;
  sequence2.loop = true;
  return [sequence, sequence2];
}

const gameEnd = () => {
  const ac = new AudioContext();
  const tempo = 80;

  const melody = [
    'C5 e',
    'D5 e',
    'C5 e',
    'B4 e',

    'C5 h',
  ];
  const harmony = [
    'G2 e',
    'D3 e',
    'F3 e',
    'G2 e',

    'E2 e',
    'G3 e',
    'C2 q',
  ];
  const sequence = new TinyMusic.Sequence(ac, tempo, melody);
  const sequence2 = new TinyMusic.Sequence(ac, tempo, harmony);

  sequence.staccato = 0.4;
  sequence2.staccato = 0.4;
  sequence.gain.gain.value = 0.3;
  sequence2.gain.gain.value = 0.3;

  sequence.mid.frequency.value = 800;
  sequence.mid.gain.value = 3;
  sequence2.bass.gain.value = 6;
  sequence2.bass.frequency.value = 80;
  sequence2.mid.gain.value = -6;
  sequence2.mid.frequency.value = 500;
  sequence2.treble.gain.value = -2;
  sequence2.treble.frequency.value = 1400;

  sequence.loop = false;
  sequence2.loop = false;
  return [sequence, sequence2];
}

const musicPlay = sequences => {
  sequences.map(s => {
    s.play();
  });
}

const musicStop = sequences => {
  sequences.map(s => {
    s.stop();
  });
}

const cSound = () => {
  const ac = new AudioContext();
  const tempo = 80;

  const sound = ['C5 0.1', 'D5 0.1'];
  const sequence = new TinyMusic.Sequence(ac, tempo, sound);
  sequence.createCustomWave([-1,0,1,0,-1,0,1],[1,0,-1,0,1,0,-1]);
  sequence.loop = false;
  return [sequence];
}

const tSound = () => {
  const ac = new AudioContext();
  const tempo = 120;

  const sound = ['C4 0.2', 'Eb4 0.2','C4 0.2', 'Eb4 0.2','C4 0.2', 'Eb4 0.2'];
  const sequence = new TinyMusic.Sequence(ac, tempo, sound);
  sequence.createCustomWave([-1,1,1,1,-1,1,1],[1,1,-1,1,1,1,-1]);
  sequence.smoothing = 0.5;
  sequence.loop = false;
  return [sequence];
}

const cocoSound = () => {
  const ac = new AudioContext();
  const tempo = 80;

  const sound = ['- 0.9', 'G3 0.1', '- 0.3','G3 0.1'];
  const sequence = new TinyMusic.Sequence(ac, tempo, sound);
  sequence.createCustomWave([-1,1,1,1,-1,1,1],[1,1,-1,1,1,1,-1]);
  sequence.staccato = 0.3;
  sequence.loop = false;
  return [sequence];
}

const music = bgMusic();
const crabSound = cSound();
const treeSound = tSound();
const coconutSound = cocoSound();
const endMusic = gameEnd();
