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
