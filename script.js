const d = 2;
const v = 200;
const vT = 100;

const D = (d / v) * vT;

console.log({ d, v, vT });
console.log({ D });

const vB = 20;
const B = vT / vB;

console.log({ vB, B });

const mlB = (D / B) * 1000;

console.log({ mlB });

const mll = mlB / vB;

console.log({ mll });
