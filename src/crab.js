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
