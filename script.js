const d = 2; // l
const v = 200; // l
const vT = 100; //l

const D = (d / v) * vT; // l

console.log({ d: d + "L/ha", v: v + "L/ha", vT: vT + "L" });
console.log({ D: D + "L" });

const vB = 20; // l
const B = vT / vB; // bombas

console.log({ vB: vB + "L", B: B + "Bombas" });

const mlB = (D / B) * 1000; //ml

console.log({ mlB: mlB + "mL/Bomba" });

const mll = mlB / vB; // ml

console.log({ mll: mll + "mL/L" });
