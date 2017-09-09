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
