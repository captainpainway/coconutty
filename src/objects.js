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

