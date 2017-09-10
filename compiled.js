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
/*
 * alphnum.js
 * Construct 3D numbers and letters (just what is needed).
*/

const color = '#ee7600';

const zero = (parent, xPos) => {
  const zero = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(zero);
  cEle('a-box', {
    width: '1',
    height: '3',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(zero);
  cEle('a-box', {
    width: '1',
    height: '3',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(zero);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(zero);
  return zero;
}

const one = (parent, xPos) => {
  const one = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(one);
  return one;
}

const two = (parent, xPos) => {
  const two = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(two);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 3 0'
  })(two);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(two);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '-1 1 0'
  })(two);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(two);
  return two;
}

const three = (parent, xPos) => {
  const three = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(three);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 3 0'
  })(three);
  cEle('a-box', {
    width: '2',
    height: '1',
    depth: '1',
    color: color,
    position: '0.5 2 0'
  })(three);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 1 0'
  })(three);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(three);
  return three;
}

const four = (parent, xPos) => {
  const four = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '2',
    depth: '1',
    color: color,
    position: '-1 3.5 0'
  })(four);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(four);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(four);
  return four;
}

const five = (parent, xPos) => {
  const five = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(five);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '-1 3 0'
  })(five);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(five);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 1 0'
  })(five);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(five);
  return five;
}

const six = (parent, xPos) => {
  const six = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(six);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(six);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(six);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(six);
  cEle('a-box', {
    width: '1',
    height: '3',
    depth: '1',
    color: color,
    position: '1 1 0'
  })(six);
  return six;
}

const seven = (parent, xPos) => {
  const seven = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(seven);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(seven);
  return seven;
}

const eight = (parent, xPos) => {
  const eight = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(eight);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(eight);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(eight);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(eight);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(eight);
  return eight;
}

const nine = (parent, xPos) => {
  const nine = cEle('a-entity', {
    position: xPos + ' 0 0',
    class: 'number'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(nine);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '-1 3 0'
  })(nine);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(nine);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(nine);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(nine);
  return nine;
}

const scoreMap = {
  0: zero.bind(this),
  1: one.bind(this),
  2: two.bind(this),
  3: three.bind(this),
  4: four.bind(this),
  5: five.bind(this),
  6: six.bind(this),
  7: seven.bind(this),
  8: eight.bind(this),
  9: nine.bind(this)
}

const s = (parent, xPos) => {
  const s1 = cEle('a-entity', {
    position: xPos + ' 0 0'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(s1);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '-1 3 0'
  })(s1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(s1);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 1 0'
  })(s1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(s1);
}

const t = (parent, xPos) => {
  const t1 = cEle('a-entity', {
    position: xPos + ' 0 0'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(t1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(t1);
}

const a = parent => {
  const a1 = cEle('a-entity', {
    position: '0 0 0'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(a1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(a1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(a1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(a1);
}

const r = (parent, xPos) => {
  const r1 = cEle('a-entity', {
    position: xPos + ' 0 0'
  })(parent);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(r1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(r1);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '1 3 0'
  })(r1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(r1);
  cEle('a-box', {
    width: '1',
    height: '3',
    depth: '1',
    color: color,
    position: '0.5 0.8 0',
    rotation: '0 0 45'
  })(r1);
}

const h = (parent) => {
  const h1 = cEle('a-entity', {
    position: '-20 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(h1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(h1);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(h1);
}

const i = (parent) => {
  const i1 = cEle('a-entity', {
    position: '-16 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(i1);
}

const c = (parent) => {
  const c1 = cEle('a-entity', {
    position: '-4 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(c1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(c1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(c1);
}

const o = (parent) => {
  const o1 = cEle('a-entity', {
    position: '0 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(o1);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '1 2 0'
  })(o1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(o1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(o1);
}

const e = (parent) => {
  const e1 = cEle('a-entity', {
    position: '8 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '5',
    depth: '1',
    color: color,
    position: '-1 2 0'
  })(e1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 4 0'
  })(e1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 2 0'
  })(e1);
  cEle('a-box', {
    width: '3',
    height: '1',
    depth: '1',
    color: color,
    position: '0 0 0'
  })(e1);
}

const col = (parent) => {
  const col1 = cEle('a-entity', {
    position: '12 0 0'
  })(parent);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 3 0'
  })(col1);
  cEle('a-box', {
    width: '1',
    height: '1',
    depth: '1',
    color: color,
    position: '0 1 0'
  })(col1);
}
/*
 * objects.js
 * Non-sprite scene objects.
*/

const scene = document.querySelector('a-scene');
const scoreBoard = document.getElementById('score');

// Element constructor (because nobody wants to set that many attributes manually).
const cEle = (name, opt) => {
  const ele = document.createElement(name);
  Object.entries(opt).map(o => ele.setAttribute(o[0], o[1]));
  return p => {
    p.append(ele);
    return ele;
  }
}

cEle('a-sky', {
  color: '#ccccff'
})(scene);

const cam = cEle('a-entity', {
  camera: true,
  id: 'camera',
  position: '0 5 16',
  target: '#island',
  'orbit-controls': true,
  distance: '16'
})(scene);

cEle('a-light', {
  type: 'point',
  color: '#ffffaa',
  position: '5 5 5'
})(cam);

// Only add the reticule if mobile, otherwise use the mouse cursor.
if(AFRAME.utils.device.isMobile()) {
  cEle('a-entity', {
    cursor: 'fuse: false;',
    position: '0 0 -2',
    geometry: 'primitive: ring; radiusInner: 0.02; radiusOuter: 0.03',
    material: 'color: #333333; shader: flat'
  })(cam);
  
cam.object3D.el.attributes.distance.value = 20;
}

const island = cEle('a-icosahedron', {
  material: 'flatShading: true; color: #77ff77;',
  radius: '10',
  detail: '2',
  position: '0 0 0',
  rotation: '-90 90 0',
  scale: '1 1 0.3',
  id: 'island'
})(scene);

const beach = cEle('a-icosahedron', {
  material: 'flatShading: true; color: #ffffdd;',
  radius: '10',
  detail: '1',
  position: '0 0 0',
  rotation: '-90 90 0',
  scale: '1.3 1.3 0.1',
  id: 'beach'
})(scene);


const ocean = cEle('a-icosahedron', {
  material: 'flatShading: true; color: #3399cc;',
  radius: '50',
  detail: '2',
  position: '0 -4.5 0',
  rotation: '-90 90 0',
  scale: '1 1 0.1',
  id: 'ocean'
})(scene);

// Give the ocean a little rise and fall.
const oceanTides = cEle('a-animation', {
  attribute: 'position',
  from: '0 -4.5 0',
  to: '0 -4.4 0',
  direction: 'alternate',
  dur: '10000',
  repeat: 'indefinite'
})(ocean);

const trunk = cEle('a-torus', {
  material: 'flatShading: true; color: #999955; side: double;',
  'radius': '10',
  'radius-tubular': '0.2',
  'segments-radial': '8',
  'segments-tubular': '4',
  position: '-10 1 0',
  arc: '40',
  id: 'trunk'
})(scene);

const leaves = cEle('a-entity', {
  position: '-2.5 7.6 0',
  rotation: '0 0 30'
})(scene);

const generateLeaves = angle => {
  if(angle < 360) {
    const rotator = cEle('a-entity', {
      position: '0 0 0',
      rotation: '0 ' + angle + ' -20'
    })(leaves);
    cEle('a-octahedron', {
      material: 'flatShading: true; color: #77ff77;',
      radius: '1',
      position: '2 0 0',
      scale: '2 0.2 1'
    })(rotator);
    return generateLeaves(angle + 60);
  }
}

generateLeaves(0);

const coconut = cEle('a-icosahedron', {
  material: 'flatShading: true; color: #555522;',
  radius: '0.6',
  detail: '1',
  position: '-2 6.9 0.75',
  id: 'coconut'
})(scene);

/*
 * crab.js
 * Template for creating and animating crab sprites.
*/

const hideCrab = element => {
  musicPlay(crabSound);
  cEle('a-animation', {
    attribute: 'position',
    to: '0 -24 0',
    easing: 'ease-in-out',
    dur: '400'
  })(element);
  setTimeout(() => {
    if(element.parentNode !== null) {
      element.parentNode.removeChild(element);
    }
  }, 500);
}

const createCrab = (crabStart, speed) => {
  const crabRotator = cEle('a-entity', {
    position: '0 -23 0',
    rotation: '0 ' + crabStart +' -30',
    class: 'crabRotator'
  })(scene);

  const animateCrab = cEle('a-animation', {
    attribute: 'rotation',
    dur: speed,
    fill: 'forwards',
    easing: 'ease-out',
    from: '0 ' + crabStart + ' -30',
    to: '0 ' + crabStart + ' 0'
  })(crabRotator);

  const crabby = cEle('a-entity', {
    position: '0 26.2 0',
    rotation: '0 -60 0',
    class: 'crabby'
  })(crabRotator);

  const crabbyWiggle = cEle('a-animation', {
    attribute: 'rotation',
    dur: '200',
    from: '0 -60 0',
    to: '0 -80 0',
    direction: 'alternate',
    repeat: 'indefinite'
  })(crabby);

  const crabbyBody = cEle('a-icosahedron', {
    material: 'flatShading: true; color: #dd0000;',
    radius: '0.5',
    detail: '0',
    position: '0 0 0',
    scale: '1 0.3 1'
  })(crabby);

  const crabbyLegs = angle => {
    if(angle < 220) {
      const rotator = cEle('a-entity', {
        position: '0 0 0',
        rotation: '0 ' + angle + ' -10'
      })(crabby);
      cEle('a-cylinder', {
        material: 'flatShading: true; color: #dd0000;',
        radius: '0.1',
        position: '0.5 0 0',
        scale: '3 0.1 1'
      })(rotator);
      return crabbyLegs(angle + (300 / 8));
    } else {
      return;
    }
  }

  crabbyLegs(-60);

  cEle('a-sphere', {
    material: 'flatShading: true; color: #dd0000; side: double;',
    radius: '0.3',
    'segments-height': '4',
    'segments-width': '10',
    'phi-length': '300',
    position: '-0.7 -0.1 0.4',
    rotation: '0 90 0',
    scale: '1 0.3 1'
  })(crabby);

  cEle('a-sphere', {
    material: 'flatShading: true; color: #dd0000; side: double;',
    radius: '0.3',
    'segments-height': '4',
    'segments-width': '10',
    'phi-length': '300',
    position: '0.3 -0.1 0.7',
    rotation: '0 130 0',
    scale: '1 0.3 1'
  })(crabby);

  crabby.addEventListener('click', () => {
    hideCrab(crabRotator);
    score++;
    processScore(score);
  });
  return crabRotator;
}
/*
 * info.js
 * Show/hide the info modal on button click.
*/

const info_button = document.getElementById('info');
const info_popup = document.getElementById('info_popup');

const infoButtonClick = () => {
  if(info_popup.classList.contains('hide')) {
    info_popup.className = 'show';
  } else {
    info_popup.className = 'hide';
  }
}

info_button.addEventListener('click', infoButtonClick);
/*
 * start.js
 * Construct the start and high score elements.
*/

const showHiScore = (hiscore) => {
  const hiScore = cEle('a-entity', {
    position: '0 0.7 10',
    id: 'hiScore',
    scale: '0.2 0.2 0.2'
  })(scene);

  h(hiScore);
  i(hiScore);
  s(hiScore, -8);
  c(hiScore);
  o(hiScore);
  r(hiScore, 4);
  e(hiScore);
  col(hiScore);

  const arr = Array.from(hiscore.toString(10));
  arr.map((n, i) => {
    const xPos = 16 + (i * 4);
    scoreMap[n].call(this, hiScore, xPos);
  });
  return hiScore;
}

const showStartText = () => {
  const startText = cEle('a-entity', {
    position: '0 3 3',
    id: 'startText',
    scale: '0.5 0.5 0.5'
  })(scene);

  s(startText, -8);
  t(startText, -4);
  a(startText);
  r(startText, 4);
  t(startText, 8);

  startText.addEventListener('click', () => {
    cEle('a-animation', {
      attribute: 'position',
      from: '0 3 3',
      to: '0 -1 3',
      easing: 'ease-in',
      dur: '1000'
    })(startText);
    setTimeout(() => {
      startText.parentNode.removeChild(startText);
    }, 1500);
    cEle('a-animation', {
      attribute: 'position',
      from: '0 0.7 10',
      to: '0 -2 10',
      easing: 'ease-in',
      dur: '1000'
    })(hiScore);
    setTimeout(() => {
      hiScore.parentNode.removeChild(hiScore);
    }, 1500);
    startGame();
  });
}
/*
 * logic.js
 * Most of the game logic and global variables reside here.
*/

let start, score = 0, lastPosition, lost, interval, speed, crabs, hiscore;

// Rotating the score if you move 180 from "front", otherwise 2 looks like 5.
const rotateScore = () => {
  if(cam.object3D.position.z < 0 && lastPosition > 0) {
    cEle('a-animation', {
      attribute: 'rotation',
      from: '0 0 0',
      to: '0 180 0',
      dur: '500',
      id: 'scoreRotator'
    })(scores);
    lastPosition = cam.object3D.position.z;
  } else if(cam.object3D.position.z > 0 && lastPosition < 0) {
    cEle('a-animation', {
      attribute: 'rotation',
      from: '0 180 0',
      to: '0 0 0',
      dur: '500',
      id: 'scoreRotator'
    })(scores);
    lastPosition = cam.object3D.position.z;
  }
}

// When a crab hits the tree, you lose.
const checkForLose = () => {
  crabs.map(c => {
    if(c.object3D.rotation.z > -0.02) {
      lost = true;
    }
  });
}

// "Lose screen" animations and game reset.
const loseScreen = () => {
  cEle('a-animation', {
    attribute: 'rotation',
    from: '0 0 30',
    to: '-5 5 30',
    direction: 'alternate',
    easing: 'ease-in-out',
    dur: '100',
    repeat: '5'
  })(leaves);
  musicPlay(treeSound);

  cEle('a-animation', {
    attribute: 'position',
    from: '-2 6.9 0.75',
    to: '-2 3.2 0.75',
    duration: '400',
    delay: '200',
    easing: 'ease-out-bounce'
  })(coconut);
  musicPlay(coconutSound);

  setTimeout(() => {
    musicStop(music);
    musicPlay(endMusic);
  }, 200)

  setTimeout(() => {
    crabs.map(c => {
      const range = document.createRange();
      range.selectNodeContents(c);
      range.deleteContents();
    });
    cEle('a-animation', {
      attribute: 'position',
      to: '-2 6.9 0.75',
      from: '-2 3.2 0.75',
      duration: '400',
      easing: 'ease-out'
    })(coconut);
    if(cam.object3D.position.z < 0) {
      cEle('a-animation', {
        attribute: 'rotation',
        from: '0 180 0',
        to: '0 0 0',
        dur: '500',
        id: 'scoreRotator'
      })(scores);
    }
    if(score > hiscore) {
      localStorage.setItem('hiScore', score);
      hiscore = score;
    }
  }, 2000);

  setTimeout(() => {
    showStartText();
    showHiScore(hiscore);
  }, 2100);

}

// Animation loop.
const runGame = tick => {
  if(lost) {
    loseScreen();
    return;
  }

  checkForLose();

  if((tick - start) >= interval) {
    start = tick;

    // Ramp up the difficulty pretty quickly so it doesn't get too boring.
    if(score !== 0) {
      speed <= 1000 ? speed = 1000 : speed -= Math.round(100 * Math.log(score));
      interval <= 1000 ? interval = 1000 : interval -= Math.round(50 * Math.log(score));
    }

    const crabStart = Math.round(Math.random() * 360);
    crabs.push(createCrab(crabStart, speed));

  }

  rotateScore();
  requestAnimationFrame(runGame);
}

// Init global variable values on game start/restart.
const startGame = () => {
  start = 0;
  score = 0;
  lastPosition = -13;
  lost = false;
  interval = 4000;
  speed = 20000;
  crabs = [];
  processScore(score);
  musicPlay(music);
  requestAnimationFrame(runGame);
}

// Grab the high score from local storage, if exists.
hiscore = localStorage.getItem('hiScore') || 0;

// Start text and high score on init.
showStartText();
showHiScore(hiscore);
/*
 * score.js
 * Add the score above the tree and map score number to 3D number.
*/

const scores = cEle('a-entity', {
  position: '0 9 0',
  scale: '0.3 0.3 0.3'
})(scene)

const processScore = score => {
  if(score === undefined) { return; }
  const range = document.createRange();
  range.selectNodeContents(scores);
  range.deleteContents();
  const arr = Array.from(score.toString(10));
  arr.map((n, i) => {
    const xPos = arr.length > 1 ? (-2 + (i * 4)) : 0;
    scoreMap[n].call(this, scores, xPos);
  });
}

processScore(score);
