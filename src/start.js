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
