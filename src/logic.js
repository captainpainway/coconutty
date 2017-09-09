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
